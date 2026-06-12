# Supabase Registration Setup

## 1. Run the SQL file

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Paste the full contents of `supabase-registration-setup.sql`.
4. Run it.

This creates:

- `public.hackathon_registrations`
- `public.hackathon_registration_members`
- Indexes for high-volume reads and inserts
- RLS insert policies for the public anon key
- A private Supabase Storage bucket named `hackathon-documents`

## 2. Configure environment variables

Add these to `.env` locally and to your hosting provider environment variables:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

Use the Supabase project URL and the anon/public key from **Project Settings → API**.

Do not put the Supabase service role/secret key in frontend environment variables. Keep it only inside Supabase, Edge Functions, or other trusted server-side code.

## 3. Verify the storage bucket

After running the SQL file, check **Storage → Buckets**.

The bucket should be:

- ID/name: `hackathon-documents`
- Public: `false`
- File size limit: `10485760` bytes
- Allowed MIME types:
  - `application/pdf`
  - `application/msword`
  - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
  - `text/plain`
  - `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
  - `application/vnd.ms-excel`

Uploaded files are stored as:

```text
hackathon-documents/{teamId}/{sanitized-document-name}
```

## 4. Existing data flows

The registration form still sends data to the existing Google Script and Discord webhook flow. Supabase is added as an additional registration sink, so existing flows are preserved.
