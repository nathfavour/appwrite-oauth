# Quick Reference - Appwrite OAuth POC

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Clone and install
git clone <your-repo>
cd appwrite-oauth
npm install

# 2. Configure environment
cp .env.local.example .env.local
# Edit .env.local with your Appwrite credentials

# 3. Run
npm run dev
```

## 🔑 Essential Environment Variables

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
```

## 📝 Appwrite Console Checklist

- [ ] Create project in Appwrite Console
- [ ] Copy Project ID to `.env.local`
- [ ] Add platform: Settings → Platforms → Web App → `localhost`
- [ ] Enable OAuth providers: Auth → Settings
- [ ] Configure each provider with redirect URLs
- [ ] Add OAuth credentials (Client ID & Secret)

## 🔐 OAuth Provider Setup (Quick Links)

| Provider | Developer Portal | What You Need |
|----------|-----------------|---------------|
| Google | [console.cloud.google.com](https://console.cloud.google.com) | Client ID, Client Secret |
| GitHub | [github.com/settings/developers](https://github.com/settings/developers) | Client ID, Client Secret |
| Microsoft | [portal.azure.com](https://portal.azure.com) | Application ID, Client Secret |
| Discord | [discord.com/developers](https://discord.com/developers/applications) | Client ID, Client Secret |
| Apple | [developer.apple.com](https://developer.apple.com/account) | Service ID, Team ID, Key ID, Private Key |

## 🎨 Key Files to Customize

```
app/page.tsx          → Home page and user profile
app/login/page.tsx    → OAuth provider buttons
app/globals.css       → Colors and design system
lib/appwrite.ts       → Appwrite configuration
```

## 🎯 Common Tasks

### Add a New OAuth Provider

1. Enable provider in Appwrite Console
2. Get OAuth credentials from provider
3. Add to `app/login/page.tsx`:

```typescript
{
  id: OAuthProvider.YourProvider,
  name: "Your Provider",
  icon: <YourIcon />,
  bgColor: "bg-color hover:bg-color-dark",
  textColor: "text-white",
  borderColor: "border-color"
}
```

### Change Color Scheme

Edit `app/globals.css`:

```css
:root {
  --accent: #your-color;
  --accent-hover: #your-hover-color;
}
```

### Get User Session Data

```typescript
const account = getAccount();
const session = await account.getSession("current");

console.log(session.provider);           // "google", "github", etc.
console.log(session.providerAccessToken); // Use for API calls
```

### Refresh OAuth Token

```typescript
await account.updateSession("current");
```

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| "Missing environment variables" | Check `.env.local` exists and has correct values. Restart server. |
| OAuth redirect error | Ensure redirect URL in provider matches Appwrite exactly |
| "Not authorized" | Add `localhost` as platform in Appwrite Console |
| Session not persisting | Check cookies are enabled, not in incognito mode |
| Build fails | Run `npm run lint` to check for errors |

## 📦 Project Structure

```
appwrite-oauth/
├── app/
│   ├── page.tsx          # Home (auth status)
│   ├── login/page.tsx    # OAuth providers
│   ├── logout/page.tsx   # Sign out
│   ├── not-found.tsx     # 404 page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Styles
├── lib/
│   └── appwrite.ts       # Appwrite client
├── README.md             # Full documentation
├── SETUP_GUIDE.md        # Detailed setup
└── .env.local.example    # Environment template
```

## 🔗 Routes

- `/` - Home page (shows auth state)
- `/login` - Sign in with OAuth providers
- `/logout` - Sign out and redirect

## 💡 Useful Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Check code quality
```

## 📚 Learn More

- **Full Setup**: See `SETUP_GUIDE.md`
- **Contributing**: See `CONTRIBUTING.md`
- **Appwrite Docs**: https://appwrite.io/docs/products/auth/oauth2
- **Next.js Docs**: https://nextjs.org/docs

## 🎬 Demo Flow

1. User visits home page → sees "Not Signed In"
2. Clicks "Go to Sign In" → sees 5 OAuth options
3. Clicks provider → redirects to provider login
4. Logs in → redirects back to app
5. Home page shows user profile + session info
6. Clicks "Sign Out" → logs out and redirects home

## 🚢 Deploy to Production

1. Deploy to Vercel/Netlify/etc.
2. Add production domain to Appwrite Platforms
3. Update OAuth redirect URLs with production domain
4. Set environment variables in hosting platform
5. Test all OAuth flows in production

## 💬 Get Help

- Open an issue on GitHub
- Join [Appwrite Discord](https://appwrite.io/discord)
- Check documentation in `README.md`

---

**Made with ❤️ using Appwrite**
