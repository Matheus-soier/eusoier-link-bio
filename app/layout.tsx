import type { Metadata } from "next";
import "./globals.css";
import { linkBioProfile } from "@/lib/linktree-content";

export const metadata: Metadata = {
  title: `${linkBioProfile.name} | ${linkBioProfile.handle}`,
  description: linkBioProfile.bio,
  metadataBase: new URL("https://eusoier.link"),
  openGraph: {
    title: `${linkBioProfile.name} | ${linkBioProfile.handle}`,
    description: linkBioProfile.bio,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${linkBioProfile.name} | ${linkBioProfile.handle}`,
    description: linkBioProfile.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
