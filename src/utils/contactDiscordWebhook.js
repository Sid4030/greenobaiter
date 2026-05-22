// ============================================
// CONTACT FORM DISCORD WEBHOOK INTEGRATION
// ============================================

const CONTACT_DISCORD_WEBHOOK_URL = import.meta.env
    .VITE_CONTACT_DISCORD_WEBHOOK_URL;

/**
 * Send contact form data to Discord webhook
 * @param {Object} contactData - Form data object
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactToDiscord(contactData) {
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
            console.log("✓ Contact form sent to Discord successfully");
            return { success: true, message: "Message sent successfully" };
        } else {
            const errorText = await response.text();
            console.error("Discord webhook error:", errorText);
            return {
                success: false,
                message: "Failed to send message to Discord",
            };
        }
    } catch (error) {
        console.error("Error sending contact to Discord:", error);
        return { success: false, message: error.message };
    }
}
