// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',      // Required: Generates the 'out' folder 

//   images: { 

//     unoptimized: true,   // Required for static hosting 

//   }, 

//   trailingSlash: true, 
// };

// module.exports = nextConfig;



 



 

// // export default nextConfig; 
// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   output: "export",
// //   images: {
// //     unoptimized: true,
// //   },
// // };

// // export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // Static export
  trailingSlash: true,

  images: {
    unoptimized: true,      // Required for static hosting
  },

  compress: true,           // Gzip / Brotli
  // swcMinify: true,          // Smaller JS
  reactStrictMode: false,    // Safer builds

  experimental: {
    optimizeCss: true,     // Smaller CSS
  },
};

module.exports = nextConfig;
