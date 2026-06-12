import { supabase } from "./supabaseClient";

const BUCKET_NAME = "hackathon-documents";
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const allowedMimeTypes = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
]);

export async function submitRegistrationToSupabase(registrationData) {
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        return {
            success: false,
            message:
                "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
        };
    }

    const validationError = validateRegistrationData(registrationData);
    if (validationError) {
        return { success: false, message: validationError };
    }

    let documentationPath = null;

    try {
        const teamLeader =
            registrationData.members.find((member) => member.isLeader) ||
            registrationData.members[0];
        documentationPath = registrationData.documentationLink
            ? await uploadDocumentationToSupabase(registrationData)
            : null;
        const rawPayload = {
            ...registrationData,
            documentationLink: registrationData.documentationLink
                ? "[stored in Supabase Storage]"
                : null,
        };

        const registrationPayload = {
            team_id: registrationData.teamId,
            team_name: registrationData.teamName.trim(),
            track: registrationData.track,
            team_size: Number(registrationData.teamSize),
            brief: registrationData.brief?.trim() || null,
            documentation_name: registrationData.documentationName || null,
            documentation_storage_path: documentationPath,
            declaration_accepted: Boolean(registrationData.declarationAccepted),
            leader_name: teamLeader.name.trim(),
            leader_email: teamLeader.email.trim().toLowerCase(),
            leader_phone: teamLeader.phone.trim(),
            leader_institute: teamLeader.institute.trim(),
            leader_city: teamLeader.city.trim(),
            raw_payload: rawPayload,
        };

        const registrationResult = await supabase
            .from("hackathon_registrations")
            .insert(registrationPayload)
            .select("id")
            .single();

        if (registrationResult.error) {
            if (documentationPath) {
                await supabase.storage.from(BUCKET_NAME).remove([documentationPath]);
            }

            return {
                success: false,
                message: registrationResult.error.message,
            };
        }

        const membersPayload = registrationData.members.map((member, index) => ({
            registration_id: registrationResult.data.id,
            team_id: registrationData.teamId,
            member_index: index + 1,
            name: member.name.trim(),
            phone: member.phone.trim(),
            email: member.email.trim().toLowerCase(),
            institute: member.institute.trim(),
            city: member.city.trim(),
            is_leader: Boolean(member.isLeader),
        }));

        const membersResult = await supabase
            .from("hackathon_registration_members")
            .insert(membersPayload);

        if (membersResult.error) {
            await supabase
                .from("hackathon_registrations")
                .delete()
                .eq("id", registrationResult.data.id);

            if (documentationPath) {
                await supabase.storage.from(BUCKET_NAME).remove([documentationPath]);
            }

            return {
                success: false,
                message: membersResult.error.message,
            };
        }

        return {
            success: true,
            message: "Registration saved to Supabase",
            registrationId: registrationResult.data.id,
            documentationPath,
        };
    } catch (error) {
        if (documentationPath) {
            await supabase.storage.from(BUCKET_NAME).remove([documentationPath]);
        }

        return {
            success: false,
            message: error.message || "Supabase submission failed",
        };
    }
}

async function uploadDocumentationToSupabase(registrationData) {
    const file = base64ToBlob(
        registrationData.documentationLink,
        getMimeType(registrationData.documentationName),
    );

    if (file.size > MAX_FILE_SIZE) {
        throw new Error("File size exceeds 10MB.");
    }

    if (!allowedMimeTypes.has(file.type)) {
        throw new Error("Invalid file type.");
    }

    const storagePath = `${registrationData.teamId}/${sanitizeFileName(
        registrationData.documentationName,
    )}`;

    const uploadResult = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, file, {
            cacheControl: "3600",
            contentType: file.type,
            upsert: false,
        });

    if (uploadResult.error) {
        throw new Error(uploadResult.error.message);
    }

    return storagePath;
}

function validateRegistrationData(registrationData) {
    if (!registrationData.teamId) return "Missing team ID.";
    if (!registrationData.teamName?.trim()) return "Missing team name.";
    if (!registrationData.track) return "Missing track.";
    if (!registrationData.teamSize) return "Missing team size.";
    if (!Array.isArray(registrationData.members)) return "Missing team members.";
    if (registrationData.members.length !== Number(registrationData.teamSize)) {
        return "Team size does not match submitted members.";
    }
    if (!registrationData.members.some((member) => member.isLeader)) {
        return "Team leader is required.";
    }

    for (const member of registrationData.members) {
        if (!member.name?.trim()) return "Member name is required.";
        if (!member.phone?.trim()) return "Member phone is required.";
        if (!member.email?.trim()) return "Member email is required.";
        if (!member.institute?.trim()) return "Member institute is required.";
        if (!member.city?.trim()) return "Member city is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email.trim())) {
            return "A team member has an invalid email address.";
        }
    }

    return null;
}

function base64ToBlob(base64Data, mimeType) {
    const base64Content = base64Data.includes(",")
        ? base64Data.split(",")[1]
        : base64Data;
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);

    for (let index = 0; index < byteCharacters.length; index += 1) {
        byteNumbers[index] = byteCharacters.charCodeAt(index);
    }

    return new Blob([new Uint8Array(byteNumbers)], { type: mimeType });
}

function getMimeType(fileName) {
    if (!fileName) return "application/octet-stream";

    const extension = fileName.split(".").pop().toLowerCase();
    const mimeTypes = {
        pdf: "application/pdf",
        doc: "application/msword",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        txt: "text/plain",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        xls: "application/vnd.ms-excel",
    };

    return mimeTypes[extension] || "application/octet-stream";
}

function sanitizeFileName(fileName) {
    const name = fileName.replace(/\.[^/.]+$/, "");
    const extension = fileName.split(".").pop().toLowerCase();
    const safeName = name
        .toLowerCase()
        .replace(/[^a-z0-9._-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80) || "documentation";

    return `${safeName}.${extension}`;
}
