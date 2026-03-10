
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",          // Static export
//   trailingSlash: true,

//   images: {
//     unoptimized: true,      // Required for static hosting
//   },

//   compress: true,           // Gzip / Brotli
//   // swcMinify: true,          // Smaller JS
//   reactStrictMode: false,    // Safer builds

//   experimental: {
//     optimizeCss: true,     // Smaller CSS
//   },
// };

// module.exports = nextConfig;
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

  // ── Tree-shake large libraries (safe — no CSS impact) ───────────────────
  experimental: {
    optimizeCss: false,                  // keep OFF — breaks static export CSS
    optimizePackageImports: [
      "lucide-react",                    // smaller icon bundle
      "react-icons",                     // smaller icon bundle
    ],
  },
};

export default nextConfig;