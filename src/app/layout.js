import { Geist, Geist_Mono } from "next/font/google";
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

// Set absolute URLs for social previews; prefer env but fall back to your production URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-9r73.vercel.app"; //Will change this url

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
  // Use absolute base URL for OG/Twitter. Environment variable overrides the default when present.
  metadataBase: new URL(siteUrl),
  title: "Ebenezer Fuachie — Portfolio",
  description:
    "Personal portfolio of Ebenezer Fuachie showcasing projects, experience, and ways to get in touch.",
  applicationName: "Portfolio",
  authors: [{ name: "Ebenezer Fuachie" }],
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
      </body>
    </html>
  );
}
