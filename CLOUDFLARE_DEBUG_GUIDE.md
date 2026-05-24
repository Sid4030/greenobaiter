# Cloudflare Deployment - Discord Webhook Debug Guide

## Changes Made ✅

1. **Created `src/utils/envValidator.js`**
    - Validates environment variables on app startup
    - Provides debugging helper functions
    - Logs clear error messages if env vars are missing

2. **Updated `src/utils/contactDiscordWebhook.js`**
    - Added validation check before sending
    - Enhanced error logging with detailed response info
    - Shows status codes and error bodies
    - Logs webhook URL configuration status

3. **Updated `src/utils/discordWebhook.js`**
    - Added validation check before sending registration
    - Enhanced error logging for registration and file uploads
    - Better error messages with full diagnostic info
    - Shows webhook URL configuration status

## How to Debug on Cloudflare

### Step 1: Check Browser Console (F12)

When a form submission fails, look for messages like:

- ✅ "All environment variables loaded successfully" → Env vars are set correctly
- ❌ "Missing Environment Variables" → Env vars not configured
- ❌ "Discord webhook URL not configured" → Empty env var value

### Step 2: Verify Cloudflare Environment Variables

1. Go to **Cloudflare Pages → Your Project**
2. Click **Settings → Environment variables**
3. Verify these are set for **Production** environment:
    - `VITE_CONTACT_DISCORD_WEBHOOK_URL`
    - `VITE_REGISTRATION_DISCORD_WEBHOOK_URL`

### Step 3: Check Discord API Responses

The console will now show:

```
❌ Discord webhook error: {
  status: 401,
  statusText: "Unauthorized",
  body: "Invalid webhook token",
  url: "[URL configured]"
}
```

This tells you exactly what Discord rejected.

### Step 4: Common Issues

| Issue                            | Solution                                  |
| -------------------------------- | ----------------------------------------- |
| ❌ Missing Environment Variables | Add them in Cloudflare Pages settings     |
| Status 401                       | Webhook URL is invalid or expired         |
| Status 429                       | Rate limited by Discord (retry later)     |
| Status 404                       | Webhook doesn't exist or was deleted      |
| CORS error                       | Discord might be blocking client requests |
| No error but no message          | Check Discord channel permissions         |

### Step 5: Rebuild After Changes

After adding environment variables to Cloudflare:

1. **Trigger a rebuild** (redeploy)
2. **Wait for build to complete**
3. **Test again in production**

## Local Testing

Env vars work locally from `.env` file:

```bash
npm run dev
```

## Production Testing

1. Deploy to Cloudflare: `git push`
2. Wait for build to finish
3. Open the website and test the forms
4. Check console (F12) for error messages
5. Check Discord channel for incoming messages

## If Still Not Working

The console errors will now clearly show:

- What's wrong (missing URL, API error, network error)
- The Discord API response
- Whether the URL is configured

Share these console errors for debugging!
