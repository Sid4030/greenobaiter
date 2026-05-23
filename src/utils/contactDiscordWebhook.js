// ============================================
// CONTACT FORM DISCORD WEBHOOK INTEGRATION
// ============================================

import { getContactWebhookURL, validateEnv } from "./envValidator";

const CONTACT_DISCORD_WEBHOOK_URL = getContactWebhookURL();

/**
 * Send contact form data to Discord webhook
 * @param {Object} contactData - Form data object
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactToDiscord(contactData) {
    // Validate environment variables
    if (!CONTACT_DISCORD_WEBHOOK_URL) {
        console.error(
            "❌ Discord webhook URL not configured. Check environment variables.",
        );
        return {
            success: false,
            message: "Discord webhook not configured on this deployment",
        };
    }

    try {
        const { name, email, university, track, message } = contactData;

        // Map track codes to readable names
        const trackNames = {
            "circular-waste": "🔄 Track 1: Circular Waste Recovery",
            "smart-cities": "🏙️ Track 2: Smart Climate Cities",
            "net-zero-ai": "🤖 Track 3: Net Zero AI Architectures",
        };

        const trackLabel = trackNames[track] || track;

        // Create Discord embed
        const embed = {
            title: "📧 New Contact Form Submission",
            description: "Someone reached out through the contact form",
            color: 11861555, // #0B3D2B - green
            fields: [
                {
                    name: "👤 Name",
                    value: name,
                    inline: true,
                },
                {
                    name: "📧 Email",
                    value: email,
                    inline: true,
                },
                {
                    name: "🏫 University / Institute",
                    value: university || "Not provided",
                    inline: false,
                },
                {
                    name: "📌 Interested Track",
                    value: trackLabel,
                    inline: true,
                },
                {
                    name: "💬 Message",
                    value: message,
                    inline: false,
                },
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Greenovators Contact Form",
            },
        };

        // Send to Discord
        console.log("📤 Sending contact form to Discord...");
        const response = await fetch(CONTACT_DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [embed],
            }),
        });

        if (response.ok) {
            console.log("✅ Contact form sent to Discord successfully");
            return { success: true, message: "Message sent successfully" };
        } else {
            const errorText = await response.text();
            console.error("❌ Discord webhook error:", {
                status: response.status,
                statusText: response.statusText,
                body: errorText,
                url: CONTACT_DISCORD_WEBHOOK_URL
                    ? "[URL configured]"
                    : "[NO URL]",
            });
            return {
                success: false,
                message: `Failed to send message to Discord (${response.status}): ${errorText}`,
            };
        }
    } catch (error) {
        console.error("❌ Error sending contact to Discord:", {
            message: error.message,
            stack: error.stack,
            webhookConfigured: !!CONTACT_DISCORD_WEBHOOK_URL,
        });
        return { success: false, message: `Error: ${error.message}` };
    }
}
