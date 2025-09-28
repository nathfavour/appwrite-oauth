"use client";

import { OAuthProvider } from "appwrite";
import { getAccount } from "@/lib/appwrite";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = async (provider: OAuthProvider) => {
    const account = getAccount();
    const success = `${window.location.origin}/`;
    const failure = `${window.location.origin}/login?error=1`;
    await account.createOAuth2Session({ provider, success, failure });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-sm w-full space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-sm text-gray-500">Choose a provider</p>
        <div className="space-y-3">
          <button
            className="w-full rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => handleLogin(OAuthProvider.Google)}
          >
            Continue with Google
          </button>
          <button
            className="w-full rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => handleLogin(OAuthProvider.Github)}
          >
            Continue with GitHub
          </button>
        </div>
        <div className="text-sm">
          <Link className="underline" href="/">Go back</Link>
        </div>
      </div>
    </div>
  );
}
