import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { GoogleTagManager } from '@next/third-parties/google';
import CookieBanner from "./components/cookiebanner/cookieBanner";
// import GoogleTagManagerContainer from "./components/cookiebanner/GoogleTagManager";

import { Manrope } from "next/font/google";
import organizationSchema from "@/libraries/schema/organizationSchema";

// ============================================
// SEO VARIABLES - UPDATE ONLY THESE VALUES
// ============================================

// Variable 1: Default Title
const PAGE_TITLE = "AdRefresh - Digital Marketing and AdOps";

// Variable 2: Title Template
const SEO_TITLE_TEMPLATE = "%s | AdRefresh";

// Variable 3: Meta Description
const PAGE_DESCRIPTION = "AI-Enhanced Digital Marketing and Advertising Operations";

// ============================================
// FONT CONFIG
// ============================================

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/* =========================
   METADATA
========================= */
export const metadata: Metadata = {
  title: {
    default: PAGE_TITLE,
    template: "%s | AdRefresh",
  },
  description: PAGE_DESCRIPTION,
  // Adding robots for root layout (good practice)
  robots: {
    index: true,
    follow: true,
  },
  // Adding openGraph for root layout (used as fallback)
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "AdRefresh",
    locale: "en_US",
    type: "website",
  },
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "https://www.adrefresh.com";

  return (
    <html
      lang="en"
      className={manrope.className}
      style={{ ["--base-path" as any]: basePath }}
    >
      <head>
        {/* 1. CRITICAL: Initialize dataLayer and Default Consent BEFORE GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />

        {/* ✅ PERF FIX: Preload hero poster using stable public path */}
        <link
          rel="preload"
          as="image"
          href="/images/client-images/hero-img.png"
        />

        {/* ✅ PERF FIX: Preload conference background */}
        <link
          rel="preload"
          as="image"
          href="/images/HomePageImages/conference-40kb.webp"
        />

        {/* ✅ PERF FIX: Preconnect to third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://snap.licdn.com" crossOrigin="anonymous" />

        {/* ORGANIZATION STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {process.env.NEXT_PUBLIC_ENABLE_GTM === "true" && (
          <GoogleTagManager gtmId="GTM-MMMX5TGB" />
        )}

        <CookieBanner />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}