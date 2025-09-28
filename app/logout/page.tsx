"use client";

import { useEffect } from "react";
import { getAccount } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      try {
        const account = getAccount();
        await account.deleteSession("current");
      } catch {
        // ignore
      } finally {
        router.replace("/");
      }
    };
    run();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <p>Signing you out...</p>
    </div>
  );
}
