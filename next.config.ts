
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
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  compress: true,
  reactStrictMode: false,

  experimental: {
    optimizeCss: false, // 🔥 IMPORTANT
  },
};

module.exports = nextConfig;