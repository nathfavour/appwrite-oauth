## Appwrite OAuth POC

Minimal Next.js app with Appwrite OAuth login for Google and GitHub.

### Setup

1) Configure providers in Appwrite Console
- Auth → Settings → Enable Google and GitHub
- Use redirect URL shown in the console for each provider

2) Environment
Create `.env.local` from `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Fill in values from your Appwrite project:
- `NEXT_PUBLIC_APPWRITE_ENDPOINT`
- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`

3) Install deps

```bash
npm install
```

4) Run

```bash
npm run dev
```

### Routes
- `/` shows auth state; link to `/login` or `/logout`
- `/login` buttons for Google and GitHub (client redirect)
- `/logout` deletes current session and redirects home

### Notes
- Based on `docx/oauth.md`, we use `Account.createOAuth2Session` with success/failure redirect back to the app.
