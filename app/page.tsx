"use client";

import Link from "next/link";
import { getAccount } from "@/lib/appwrite";
import { useEffect, useState } from "react";

type User = {
  $id: string;
  name: string;
  email?: string;
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const account = getAccount();
        const me = await account.get();
        setUser(me as unknown as User);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Appwrite OAuth POC</h1>
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="font-medium">{user.name || user.email || user.$id}</p>
            <div>
              <Link className="underline" href="/logout">Log out</Link>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">You are not signed in.</p>
            <Link className="underline" href="/login">Go to Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}
