import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appwrite OAuth POC | Complete Authentication Example",
  description: "A production-ready proof of concept demonstrating OAuth authentication with Appwrite, featuring Google, GitHub, Microsoft, Discord, and Apple sign-in.",
  keywords: ["Appwrite", "OAuth", "Authentication", "Next.js", "TypeScript", "Google", "GitHub"],
  authors: [{ name: "Appwrite Community" }],
  openGraph: {
    title: "Appwrite OAuth POC",
    description: "Complete OAuth authentication example with Appwrite",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
