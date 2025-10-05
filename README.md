# Appwrite OAuth POC

A complete, production-ready proof of concept demonstrating OAuth authentication integration with Appwrite in a Next.js application. This project serves as a comprehensive reference for developers looking to implement OAuth authentication using Appwrite's authentication services.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)
![Appwrite](https://img.shields.io/badge/Appwrite-20.1.0-f02e65)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🔐 **Multiple OAuth Providers**: Google, GitHub, Microsoft, Discord, and Apple
- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- 🌓 **Dark Mode**: Automatic dark mode support
- 📱 **Mobile Responsive**: Works perfectly on all screen sizes
- ⚡ **Type Safe**: Full TypeScript implementation
- 🔄 **Session Management**: Proper handling of OAuth sessions
- 🎯 **Error Handling**: Comprehensive error handling with user-friendly messages
- 📊 **User Profile**: Display authenticated user information and session details

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- An Appwrite account (free at [cloud.appwrite.io](https://cloud.appwrite.io))
- OAuth credentials from your chosen providers

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd appwrite-oauth
npm install
```

### 2. Configure Appwrite Project

1. **Create an Appwrite Project**
   - Go to [Appwrite Console](https://cloud.appwrite.io)
   - Click "Create Project"
   - Name your project (e.g., "OAuth POC")
   - Copy your Project ID

2. **Configure OAuth Providers**

   Navigate to **Auth → Settings** in your Appwrite Console.

   #### Google OAuth Setup
   - Enable Google provider in Appwrite Console
   - Copy the redirect URL shown (e.g., `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`)
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Add the Appwrite redirect URL to authorized redirect URIs
   - Copy Client ID and Client Secret to Appwrite Console

   #### GitHub OAuth Setup
   - Enable GitHub provider in Appwrite Console
   - Copy the redirect URL shown
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Create a new OAuth App
   - Set Authorization callback URL to Appwrite's redirect URL
   - Copy Client ID and Client Secret to Appwrite Console

   #### Microsoft OAuth Setup
   - Enable Microsoft provider in Appwrite Console
   - Go to [Azure Portal](https://portal.azure.com)
   - Register a new application
   - Configure redirect URIs with Appwrite's URL
   - Copy Application (client) ID and create a client secret

   #### Discord OAuth Setup
   - Enable Discord provider in Appwrite Console
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Add OAuth2 redirect with Appwrite's URL
   - Copy Client ID and Client Secret

   #### Apple OAuth Setup
   - Enable Apple provider in Appwrite Console
   - Go to [Apple Developer](https://developer.apple.com)
   - Configure Sign in with Apple
   - Set up Service ID and redirect URIs

### 3. Environment Configuration

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Appwrite credentials:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
```

> **Note**: Replace `your_project_id_here` with your actual Appwrite Project ID from step 2.

### 4. Configure Platform

In your Appwrite Console:

1. Go to **Settings → Platforms**
2. Click **Add Platform** → **Web App**
3. Name: `OAuth POC` (or your preferred name)
4. Hostname: `localhost` (for development)
5. For production, add your actual domain

### 5. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 How It Works

### Authentication Flow

1. **User Initiates Login**: User clicks on an OAuth provider button on `/login`
2. **OAuth Redirect**: Appwrite redirects user to the provider's login page
3. **User Authenticates**: User logs in with their provider credentials
4. **Provider Callback**: Provider redirects back to Appwrite with authorization code
5. **Session Creation**: Appwrite creates a session and redirects to your success URL
6. **Profile Access**: Your app can now access user profile using the session

### Project Structure

```
appwrite-oauth/
├── app/
│   ├── login/
│   │   └── page.tsx       # OAuth login page with provider buttons
│   ├── logout/
│   │   └── page.tsx       # Logout handler
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (shows auth state)
│   └── globals.css        # Global styles
├── lib/
│   └── appwrite.ts        # Appwrite client initialization
├── .env.local.example     # Example environment variables
└── README.md              # This file
```

### Key Components

#### Appwrite Client (`lib/appwrite.ts`)
Initializes and exports the Appwrite client with singleton pattern:

```typescript
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
```

#### Login Page (`app/login/page.tsx`)
Handles OAuth provider selection and initiates authentication:

```typescript
const handleLogin = async (provider: OAuthProvider) => {
  const account = getAccount();
  await account.createOAuth2Session({
    provider,
    success: `${window.location.origin}/`,
    failure: `${window.location.origin}/login?error=1`
  });
};
```

#### Home Page (`app/page.tsx`)
Displays user authentication state and profile information:

```typescript
const account = getAccount();
const user = await account.get();
const session = await account.getSession("current");
```

## 🎨 Customization

### Adding More OAuth Providers

Appwrite supports many OAuth providers. To add a new one:

1. Enable the provider in Appwrite Console
2. Configure the provider's OAuth application
3. Add a button in `app/login/page.tsx`:

```typescript
{
  id: OAuthProvider.Spotify,
  name: "Spotify",
  icon: <SpotifyIcon />,
  bgColor: "bg-green-500 hover:bg-green-600",
  textColor: "text-white",
  borderColor: "border-green-500"
}
```

### Styling

The project uses Tailwind CSS v4. Modify `app/globals.css` to customize the color scheme:

```css
:root {
  --accent: #6366f1;      /* Change primary color */
  --accent-hover: #4f46e5;
}
```

## 🔧 Advanced Features

### Session Management

Get current session details:

```typescript
const session = await account.getSession("current");
console.log(session.provider);           // e.g., "google"
console.log(session.providerAccessToken); // Access token for API calls
```

### Refresh OAuth Session

Refresh the OAuth session to get a new access token:

```typescript
await account.updateSession("current");
```

### Access Provider APIs

Use the access token to call provider APIs:

```typescript
const session = await account.getSession("current");
const token = session.providerAccessToken;

// Example: Fetch GitHub user repos
const response = await fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

## 🐛 Troubleshooting

### "Missing environment variables" Error
- Ensure `.env.local` exists and contains valid values
- Restart the dev server after changing environment variables

### OAuth Redirect Not Working
- Check that the redirect URL in your OAuth app matches Appwrite's redirect URL exactly
- Verify the hostname is added as a platform in Appwrite Console

### "Authentication Failed" Error
- Verify OAuth credentials in Appwrite Console are correct
- Check that the OAuth provider is enabled in Appwrite
- Ensure the OAuth app is not in development/sandbox mode (for production)

### Session Not Persisting
- Check browser cookies are enabled
- Verify the domain is correctly configured in Appwrite platforms

## 📚 Resources

- [Appwrite OAuth Documentation](https://appwrite.io/docs/products/auth/oauth2)
- [Appwrite Console](https://cloud.appwrite.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Discord Community](https://appwrite.io/discord)

## 🤝 Contributing

This is a proof of concept, but improvements are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Appwrite](https://appwrite.io)
- Powered by [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for the Appwrite community**
