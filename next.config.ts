/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/rebrand",

  assetPrefix: "/rebrand/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

// import type { NextConfig } from "next"; 

 

// const nextConfig: NextConfig = { 

//   output: 'export',      // Required: Generates the 'out' folder 

//   images: { 

//     unoptimized: true,   // Required for static hosting 

//   }, 

//   trailingSlash: true,   // Clean URLs (e.g., /contact/) on Apache servers 

// }; 

 

// export default nextConfig; 
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
