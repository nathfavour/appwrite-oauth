"use client";

import { useEffect, useState } from "react";
import { getAccount } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const run = async () => {
      try {
        const account = getAccount();
        await account.deleteSession("current");
        setStatus("success");
        setTimeout(() => {
          router.replace("/");
        }, 1000);
      } catch (error) {
        console.error("Logout error:", error);
        setStatus("error");
        setTimeout(() => {
          router.replace("/");
        }, 2000);
      }
    };
    run();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-12 text-center space-y-6 animate-fade-in">
          {status === "loading" && (
            <>
              <div className="w-16 h-16 mx-auto">
                <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Signing you out</h2>
                <p className="text-gray-600 dark:text-gray-400">Please wait...</p>
              </div>
            </>
          )}

          {status === "success" && (
            <>
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Signed out successfully</h2>
                <p className="text-gray-600 dark:text-gray-400">Redirecting you to home...</p>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Something went wrong</h2>
                <p className="text-gray-600 dark:text-gray-400">Redirecting you back...</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
