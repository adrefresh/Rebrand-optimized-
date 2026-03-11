
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   output: "export",          // Static export
// //   trailingSlash: true,

// //   images: {
// //     unoptimized: true,      // Required for static hosting
// //   },

// //   compress: true,           // Gzip / Brotli
// //   // swcMinify: true,          // Smaller JS
// //   reactStrictMode: false,    // Safer builds

// //   experimental: {
// //     optimizeCss: true,     // Smaller CSS
// //   },
// // };

// // module.exports = nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // ── Static export for Hostinger ─────────────────────────────────────────
//   output: "export",
//   trailingSlash: true,

//   // ── Turbopack (Next.js 16) ───────────────────────────────────────────────
//   turbopack: {},

//   // ── Images: must be unoptimized for static export ───────────────────────
//   images: {
//     unoptimized: true,
//   },

//   // ── Compression ─────────────────────────────────────────────────────────
//   compress: true,

//   // ── Strict mode off ─────────────────────────────────────────────────────
//   reactStrictMode: false,

//   // ── Remove X-Powered-By header ──────────────────────────────────────────
//   poweredByHeader: false,

//   // ── Tree-shake large libraries (safe — no CSS impact) ───────────────────
//   experimental: {
//     optimizeCss: false,                  // keep OFF — breaks static export CSS
//     optimizePackageImports: [
//       "lucide-react",                    // smaller icon bundle
//       "react-icons",                     // smaller icon bundle
//     ],
//   },
// };

// export default nextConfig;
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

  // ✅ FIX: Target modern browsers only — removes legacy polyfills (~25KB saved)
  // Array.prototype.at, flat, flatMap, Object.fromEntries etc are all
  // natively supported in Chrome 92+, Firefox 90+, Safari 15+ (2021+)
  // This stops Babel from shipping unnecessary polyfills in 640c112d1b9a4643.js
  compiler: {
    // Remove console logs in production for slight perf gain
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
