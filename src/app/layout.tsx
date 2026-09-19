import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { StructuredData } from "@/components/seo/structured-data";
import { profile } from "@/content/profile";
import { ogImage, siteConfig } from "@/lib/site";

import "./globals.css";

/**
 * Both families are self-hosted by next/font at build time: the files are
 * emitted alongside the site, so there is no request to a third-party origin
 * on first paint and no flash of unstyled text.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${profile.name}`,
  },
  description: siteConfig.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  keywords: [
    profile.name,
    "software engineer Uganda",
    "DevOps engineer Kampala",
    "Next.js",
    "Docker",
    "FPL SquadPilot",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: profile.name,
    locale: siteConfig.locale,
    images: [{ ...ogImage, alt: `${profile.name} — ${profile.role}` }],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3f3f3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
