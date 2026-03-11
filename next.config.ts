import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Static export for Hostinger ─────────────────────────────────────────
  output: "export",
  trailingSlash: true,

  // ── Turbopack (Next.js 16) ───────────────────────────────────────────────
  turbopack: {},

  // ── Images: must be unoptimized for static export ───────────────────────
  images: {
    unoptimized: true,
  },

  // ── Compression ─────────────────────────────────────────────────────────
  compress: true,

  // ── Strict mode off ─────────────────────────────────────────────────────
  reactStrictMode: false,

  // ── Remove X-Powered-By header ──────────────────────────────────────────
  poweredByHeader: false,

  // ── Tree-shake large libraries ───────────────────────────────────────────
  experimental: {
    optimizeCss: false,                  // keep OFF — breaks static export CSS
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
    ],
  },

  // ✅ FIX: Target modern browsers to eliminate legacy polyfills (~25KB saved)
  // Removes Array.prototype.at, flat, flatMap, Object.fromEntries etc polyfills
  // that are natively supported in all browsers since 2021
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ FIX: Tell webpack to target modern browsers only
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = ["web", "es2020"];
    }
    return config;
  },
};

export default nextConfig;