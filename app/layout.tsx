import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = `${profile.name} — ${profile.headline.replace(/\.$/, "")}`;

export const metadata: Metadata = {
  title,
  description: profile.bio,
  metadataBase: new URL(profile.url),
  openGraph: {
    title,
    description: profile.bio,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.bio,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
