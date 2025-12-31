/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',      // Required: Generates the 'out' folder 

  images: { 

    unoptimized: true,   // Required for static hosting 

  }, 

  trailingSlash: true, 
};

module.exports = nextConfig;



 



 

// export default nextConfig; 
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
