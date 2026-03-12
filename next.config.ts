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

//   // ── Tree-shake large libraries ───────────────────────────────────────────
//   experimental: {
//     optimizeCss: false,                  // keep OFF — breaks static export CSS
//     optimizePackageImports: [
//       "lucide-react",
//       "react-icons",
//     ],
//   },

//   // ✅ FIX: Target modern browsers to eliminate legacy polyfills (~25KB saved)
//   // Removes Array.prototype.at, flat, flatMap, Object.fromEntries etc polyfills
//   // that are natively supported in all browsers since 2021
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },

//   // ✅ FIX: Tell webpack to target modern browsers only
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.target = ["web", "es2020"];
//     }
//     return config;
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

  // ── Tree-shake large libraries ───────────────────────────────────────────
  experimental: {
    optimizeCss: false,           // keep OFF — breaks static export CSS
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ FIX: Target modern browsers — eliminates Array.at, flat, Object.fromEntries polyfills (~25 KiB saved)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = ["web", "es2020"];

      // ✅ FIX: Split vendor chunks more aggressively to improve caching
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            // Separate react into its own chunk — rarely changes, long cache
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: "react-vendor",
              chunks: "all",
              priority: 30,
            },
            // Third-party tracking — isolate so it can be lazy-loaded
            tracking: {
              test: /[\\/]node_modules[\\/](@next\/third-parties)[\\/]/,
              name: "tracking-vendor",
              chunks: "async",       // async = only load when needed
              priority: 20,
            },
            // Everything else in node_modules
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 10,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;