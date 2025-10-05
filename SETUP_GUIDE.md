# Appwrite OAuth Setup Guide

This guide will walk you through setting up OAuth authentication with Appwrite step by step.

## Table of Contents
- [Create Appwrite Project](#create-appwrite-project)
- [Google OAuth Setup](#google-oauth-setup)
- [GitHub OAuth Setup](#github-oauth-setup)
- [Microsoft OAuth Setup](#microsoft-oauth-setup)
- [Discord OAuth Setup](#discord-oauth-setup)
- [Apple OAuth Setup](#apple-oauth-setup)
- [Configure Your App](#configure-your-app)

## Create Appwrite Project

1. Go to [Appwrite Cloud Console](https://cloud.appwrite.io)
2. Sign up or log in to your account
3. Click **"Create Project"**
4. Enter a name for your project (e.g., "OAuth POC")
5. Click **"Create"**
6. Copy your **Project ID** (you'll need this later)

## Google OAuth Setup

### Step 1: Configure Google OAuth App

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Navigate to **"APIs & Services" → "Credentials"**
4. Click **"Create Credentials" → "OAuth client ID"**
5. If prompted, configure the OAuth consent screen:
   - User Type: External (for testing) or Internal (for organization)
   - App name: Your app name
   - User support email: Your email
   - Developer contact: Your email
   - Add scopes: `email`, `profile`, `openid`
   - Add test users (if using External)
6. Create OAuth client ID:
   - Application type: **Web application**
   - Name: "Appwrite OAuth POC"
   - Authorized redirect URIs: Leave empty for now

### Step 2: Enable in Appwrite

1. In your Appwrite Console, go to **Auth → Settings**
2. Find and click on **Google**
3. Toggle to **Enable**
4. Copy the **Redirect URL** shown (e.g., `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`)
5. Go back to Google Cloud Console
6. Edit your OAuth client
7. Add the Appwrite redirect URL to **Authorized redirect URIs**
8. Save changes
9. Copy the **Client ID** and **Client Secret**
10. Paste them into the Appwrite Console Google OAuth settings
11. Click **Update**

## GitHub OAuth Setup

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the details:
   - Application name: "Appwrite OAuth POC"
   - Homepage URL: `http://localhost:3000` (or your domain)
   - Authorization callback URL: Leave empty for now
4. Click **"Register application"**

### Step 2: Enable in Appwrite

1. In your Appwrite Console, go to **Auth → Settings**
2. Find and click on **GitHub**
3. Toggle to **Enable**
4. Copy the **Redirect URL** shown
5. Go back to GitHub OAuth App settings
6. Update **Authorization callback URL** with the Appwrite redirect URL
7. Click **"Update application"**
8. Copy the **Client ID**
9. Generate a new **Client Secret**
10. Paste both into the Appwrite Console GitHub OAuth settings
11. Click **Update**

## Microsoft OAuth Setup

### Step 1: Register Azure Application

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **"Azure Active Directory" → "App registrations"**
3. Click **"New registration"**
4. Fill in the details:
   - Name: "Appwrite OAuth POC"
   - Supported account types: Choose based on your needs
   - Redirect URI: Leave empty for now
5. Click **"Register"**

### Step 2: Configure Application

1. Copy the **Application (client) ID**
2. Go to **"Certificates & secrets"**
3. Click **"New client secret"**
4. Add a description and set expiry
5. Click **"Add"**
6. Copy the secret **Value** (you can't see it again!)

### Step 3: Enable in Appwrite

1. In your Appwrite Console, go to **Auth → Settings**
2. Find and click on **Microsoft**
3. Toggle to **Enable**
4. Copy the **Redirect URL** shown
5. Go back to Azure App Registration
6. Go to **"Authentication"**
7. Click **"Add a platform" → "Web"**
8. Enter the Appwrite redirect URL
9. Save changes
10. Paste Client ID and Client Secret into Appwrite Console
11. Click **Update**

## Discord OAuth Setup

### Step 1: Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Enter a name: "Appwrite OAuth POC"
4. Accept terms and click **"Create"**

### Step 2: Configure OAuth2

1. Go to **"OAuth2" → "General"**
2. Copy the **Client ID**
3. Click **"Reset Secret"** to generate a Client Secret
4. Copy the **Client Secret**

### Step 3: Enable in Appwrite

1. In your Appwrite Console, go to **Auth → Settings**
2. Find and click on **Discord**
3. Toggle to **Enable**
4. Copy the **Redirect URL** shown
5. Go back to Discord Developer Portal
6. In OAuth2 settings, add the Appwrite redirect URL to **Redirects**
7. Save changes
8. Paste Client ID and Client Secret into Appwrite Console
9. Click **Update**

## Apple OAuth Setup

### Step 1: Create App ID

1. Go to [Apple Developer](https://developer.apple.com/account)
2. Navigate to **"Certificates, Identifiers & Profiles"**
3. Click **"Identifiers" → "+"**
4. Select **"App IDs"** and click **"Continue"**
5. Select **"App"** and click **"Continue"**
6. Fill in:
   - Description: "Appwrite OAuth POC"
   - Bundle ID: Use a reverse domain (e.g., `com.yourcompany.oauth`)
7. Enable **"Sign in with Apple"**
8. Click **"Continue"** and **"Register"**

### Step 2: Create Service ID

1. Create a new Identifier
2. Select **"Services IDs"** and click **"Continue"**
3. Fill in:
   - Description: "Appwrite OAuth POC Service"
   - Identifier: Use a reverse domain (e.g., `com.yourcompany.oauth.service`)
4. Enable **"Sign in with Apple"**
5. Click **"Configure"**
6. Add your domains and redirect URLs (get from Appwrite)
7. Save and register

### Step 3: Create Key

1. Go to **"Keys" → "+"**
2. Name: "Appwrite OAuth Key"
3. Enable **"Sign in with Apple"**
4. Configure with your App ID
5. Download the key file (.p8)
6. Note the Key ID

### Step 4: Enable in Appwrite

1. In your Appwrite Console, go to **Auth → Settings**
2. Find and click on **Apple**
3. Toggle to **Enable**
4. Fill in:
   - Service ID (from Step 2)
   - Team ID (from Apple Developer Account)
   - Key ID (from Step 3)
   - Private Key (contents of .p8 file)
5. Click **Update**

## Configure Your App

### Step 1: Add Platform

1. In Appwrite Console, go to **Settings → Platforms**
2. Click **"Add Platform" → "Web App"**
3. Fill in:
   - Name: "OAuth POC"
   - Hostname: `localhost` (for development)
4. Click **"Next"**

For production, add your actual domain hostname.

### Step 2: Environment Variables

Create `.env.local` in your project:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
```

Replace `your_project_id_here` with your actual Project ID from Appwrite.

### Step 3: Test the Integration

1. Run your application: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click **"Go to Sign In"**
4. Try logging in with each provider
5. Verify you're redirected back and see your profile

## Troubleshooting

### OAuth Error: "redirect_uri_mismatch"
- The redirect URL in your OAuth app doesn't match Appwrite's redirect URL
- Copy the exact redirect URL from Appwrite Console
- Make sure there are no trailing slashes or typos

### OAuth Error: "access_denied"
- User denied permission
- Check OAuth scopes are correctly configured
- For Google: Ensure consent screen is configured

### Environment Variables Not Loading
- Make sure `.env.local` exists in the project root
- Restart the development server after creating/modifying `.env.local`
- Variable names must start with `NEXT_PUBLIC_` for client-side access

### Session Not Persisting
- Check that cookies are enabled in your browser
- Verify the hostname is added as a platform in Appwrite
- Make sure you're not in incognito/private browsing mode

### Provider Not Showing Up
- Ensure the provider is enabled in Appwrite Console
- Check that you've saved the OAuth credentials
- Verify the redirect URL is properly configured

## Security Best Practices

1. **Never commit secrets**: Keep `.env.local` in `.gitignore`
2. **Use environment variables**: Store all sensitive data in environment variables
3. **Rotate secrets regularly**: Change OAuth credentials periodically
4. **Limit scopes**: Only request the OAuth scopes you need
5. **Production domains**: Add only necessary domains to OAuth apps
6. **Monitor usage**: Check OAuth app analytics for suspicious activity

## Next Steps

- Customize the UI to match your brand
- Add more OAuth providers
- Implement user profile management
- Add role-based access control
- Set up production deployment

## Resources

- [Appwrite OAuth Docs](https://appwrite.io/docs/products/auth/oauth2)
- [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Guide](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Microsoft Identity Platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/)
- [Discord OAuth Guide](https://discord.com/developers/docs/topics/oauth2)
- [Apple Sign In Guide](https://developer.apple.com/sign-in-with-apple/)
