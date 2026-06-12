-- Run this in Supabase SQL Editor.
-- It creates registration tables, indexes, RLS insert policies for the public anon key,
-- and a private 10 MB document storage bucket.

create extension if not exists pgcrypto;

create table if not exists public.hackathon_registrations (
    id uuid primary key default gen_random_uuid(),
    team_id text not null unique,
    team_name text not null,
    track text not null check (track in ('waste-to-wealth', 'smart-infrastructure', 'net-zero-ai')),
    team_size smallint not null check (team_size between 1 and 4),
    brief text,
    documentation_name text,
    documentation_storage_path text,
    declaration_accepted boolean not null default false,
    leader_name text not null,
    leader_email text not null,
    leader_phone text not null,
    leader_institute text not null,
    leader_city text not null,
    raw_payload jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create table if not exists public.hackathon_registration_members (
    id uuid primary key default gen_random_uuid(),
    registration_id uuid not null references public.hackathon_registrations(id) on delete cascade,
    team_id text not null,
    member_index smallint not null check (member_index between 1 and 4),
    name text not null,
    phone text not null,
    email text not null,
    institute text not null,
    city text not null,
    is_leader boolean not null default false,
    created_at timestamptz not null default now()
);

create index if not exists idx_hackathon_registrations_created_at
    on public.hackathon_registrations (created_at desc);

create index if not exists idx_hackathon_registrations_team_id
    on public.hackathon_registrations (team_id);

create index if not exists idx_hackathon_registration_members_registration_id
    on public.hackathon_registration_members (registration_id);

create index if not exists idx_hackathon_registration_members_team_id
    on public.hackathon_registration_members (team_id);

create index if not exists idx_hackathon_registration_members_email
    on public.hackathon_registration_members (email);

create unique index if not exists idx_hackathon_one_leader_per_registration
    on public.hackathon_registration_members (registration_id)
    where is_leader = true;

alter table public.hackathon_registrations enable row level security;
alter table public.hackathon_registration_members enable row level security;

do $$
declare
    policy_record record;
begin
    for policy_record in
        select schemaname, tablename, policyname
        from pg_policies
        where schemaname = 'public'
          and tablename in ('hackathon_registrations', 'hackathon_registration_members')
    loop
        execute format(
            'drop policy if exists %I on %I.%I',
            policy_record.policyname,
            policy_record.schemaname,
            policy_record.tablename
        );
    end loop;
end $$;

drop policy if exists "anonymous insert hackathon registrations" on public.hackathon_registrations;
create policy "anonymous insert hackathon registrations"
    on public.hackathon_registrations
    for insert
    to public
    with check (true);

drop policy if exists "anonymous insert hackathon registration members" on public.hackathon_registration_members;
create policy "anonymous insert hackathon registration members"
    on public.hackathon_registration_members
    for insert
    to public
    with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'hackathon-documents',
    'hackathon-documents',
    false,
    10485760,
    array[
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
    ]::text[]
)
on conflict (id) do update set
    name = excluded.name,
    public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "anonymous upload hackathon documents" on storage.objects;
create policy "anonymous upload hackathon documents"
    on storage.objects
    for insert
    to public
    with check (
        bucket_id = 'hackathon-documents'
        and (storage.foldername(name))[1] ~ '^[0-9a-fA-F-]{36}$'
        and storage.extension(name) in ('pdf', 'doc', 'docx', 'txt', 'xlsx', 'xls')
    );

drop policy if exists "service role manage hackathon documents" on storage.objects;
create policy "service role manage hackathon documents"
    on storage.objects
    for all
    to service_role
    using (bucket_id = 'hackathon-documents')
    with check (bucket_id = 'hackathon-documents');
