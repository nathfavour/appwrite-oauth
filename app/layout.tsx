import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appwrite OAuth POC",
  description: "Minimal Next.js POC with Appwrite OAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
