import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import ogImage from "./og.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Absolute base URL: use env when set; during local dev, default to localhost; in production without env, omit
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined);

// Ensure proper mobile viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata = {
  // Use absolute base URL for OG/Twitter. Env overrides; dev defaults to localhost.
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Ebenezer Fuachie — Portfolio",
  description:
    "Personal portfolio of Ebenezer Fuachie showcasing projects, experience, and ways to get in touch.",
  authors: [{ name: "Ebenezer Fuachie" }],
  applicationName: "Fuachie Portfolio",
  keywords: [
    "Ebenezer Fuachie",
    "portfolio",
    "web developer",
    "frontend",
    "Next.js",
    "React",
  ],
  icons: "/favicon.ico",
  openGraph: {
    title: "Ebenezer Fuachie — Portfolio",
    description:
      "Personal portfolio of Ebenezer Fuachie showcasing projects, experience, and ways to get in touch.",
    url: "/",
    siteName: "Ebenezer Fuachie — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "Ebenezer Fuachie — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebenezer Fuachie — Portfolio",
    description:
      "Personal portfolio of Ebenezer Fuachie showcasing projects, experience, and ways to get in touch.",
    images: [ogImage.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
