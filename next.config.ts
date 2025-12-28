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
