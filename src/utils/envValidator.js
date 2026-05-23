/**
 * Environment Variables Validator
 * Checks if all required environment variables are properly loaded
 */

export function validateEnv() {
    const requiredVars = {
        VITE_CONTACT_DISCORD_WEBHOOK_URL: import.meta.env
            .VITE_CONTACT_DISCORD_WEBHOOK_URL,
        VITE_REGISTRATION_DISCORD_WEBHOOK_URL: import.meta.env
            .VITE_REGISTRATION_DISCORD_WEBHOOK_URL,
    };

    const missing = Object.entries(requiredVars)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

    if (missing.length > 0) {
        console.error("❌ Missing Environment Variables:", missing);
        console.warn(
            "⚠️ Discord webhooks may not work. Check Cloudflare Pages environment variables.",
        );
        return false;
    }

    console.log("✅ All environment variables loaded successfully");
    return true;
}

/**
 * Get Discord webhook URL with validation
 */
export function getContactWebhookURL() {
    const url = import.meta.env.VITE_CONTACT_DISCORD_WEBHOOK_URL;
    if (!url) {
        console.error("❌ VITE_CONTACT_DISCORD_WEBHOOK_URL not defined");
    }
    return url;
}

/**
 * Get Registration webhook URL with validation
 */
export function getRegistrationWebhookURL() {
    const url = import.meta.env.VITE_REGISTRATION_DISCORD_WEBHOOK_URL;
    if (!url) {
        console.error("❌ VITE_REGISTRATION_DISCORD_WEBHOOK_URL not defined");
    }
    return url;
}
