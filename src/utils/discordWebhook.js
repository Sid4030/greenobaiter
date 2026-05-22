// Discord Webhook Utility
const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1507262716627390525/ggKxgMlEPI0Aprss4TWevSZno_SLjMaNgZWl2KBGgvQIjA1kjHLBswnRXe2rirn3eMJl";

export async function sendRegistrationToDiscord(registrationData) {
    try {
        console.log("📤 Sending registration to Discord...");

        const teamLeader =
            registrationData.members.find((m) => m.isLeader) ||
            registrationData.members[0];

        // Format members list
        const membersList = registrationData.members
            .map(
                (m, i) =>
                    `${i + 1}. **${m.name}**${m.isLeader ? " 👑" : ""}\n   📧 ${m.email}\n   📱 ${m.phone}\n   🏙️ ${m.city}\n   🏛️ ${m.institute}`,
            )
            .join("\n\n");

        // Create Discord embed
        const payload = {
            content: `🎉 **NEW REGISTRATION** 🎉`,
            embeds: [
                {
                    title: `⚡ ${registrationData.teamName}`,
                    color: 11861555, // Green color (#0B3D2B)
                    fields: [
                        {
                            name: "📋 Track",
                            value: registrationData.track
                                .replace(/-/g, " ")
                                .toUpperCase(),
                            inline: true,
                        },
                        {
                            name: "👥 Team Size",
                            value: registrationData.teamSize + " members",
                            inline: true,
                        },
                        {
                            name: "🎫 Team ID",
                            value: "`" + registrationData.teamId + "`",
                            inline: true,
                        },
                        {
                            name: "👤 Team Leader",
                            value: `${teamLeader.name}\n${teamLeader.email}`,
                            inline: false,
                        },
                        {
                            name: "💡 Idea Brief",
                            value: registrationData.brief || "Not provided",
                            inline: false,
                        },
                        {
                            name: `👥 All Team Members (${registrationData.members.length})`,
                            value: membersList || "No members",
                            inline: false,
                        },
                        {
                            name: "📁 Documentation",
                            value: registrationData.documentationName
                                ? `✅ ${registrationData.documentationName}`
                                : "❌ No file submitted",
                            inline: false,
                        },
                    ],
                    footer: {
                        text: "Greenovators Hackathon 2026",
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        // Send embed message
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log("✓ Registration message sent to Discord");

            // If file exists, send it separately
            if (registrationData.documentationLink) {
                await sendFileToDiscord(
                    registrationData.documentationLink,
                    registrationData.documentationName,
                );
            }

            return {
                success: true,
                message: "Data sent to Discord successfully",
            };
        } else {
            console.error("✗ Discord webhook failed:", response.statusText);
            return { success: false, message: "Failed to send to Discord" };
        }
    } catch (error) {
        console.error("✗ Discord error:", error);
        return { success: false, message: "Discord error: " + error.message };
    }
}

async function sendFileToDiscord(base64Data, fileName) {
    try {
        console.log("📤 Uploading file to Discord...");

        // Extract Base64 content
        let base64Content = base64Data;
        if (base64Data.includes(",")) {
            base64Content = base64Data.split(",")[1];
        }

        // Create form data for multipart upload
        const blob = base64ToBlob(base64Content, getMimeType(fileName));
        const formData = new FormData();
        formData.append("file", blob, fileName);
        formData.append("content", `📎 **File:** ${fileName}`);

        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("✓ File uploaded to Discord");
            return true;
        } else {
            console.error("✗ File upload failed:", response.statusText);
            return false;
        }
    } catch (error) {
        console.error("✗ File upload error:", error);
        return false;
    }
}

function base64ToBlob(base64Content, mimeType) {
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
}

function getMimeType(filename) {
    if (!filename) return "application/octet-stream";

    const ext = filename.split(".").pop().toLowerCase();
    const mimeTypes = {
        pdf: "application/pdf",
        doc: "application/msword",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        txt: "text/plain",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        xls: "application/vnd.ms-excel",
        ppt: "application/vnd.ms-powerpoint",
        pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
    };
    return mimeTypes[ext] || "application/octet-stream";
}
