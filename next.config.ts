import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // domains: ["api.madhavamfoundation.com", "www.madhavamfoundation.com"],
    domains: [
      "https://api.madhavamfoundation.com",
      "api.madhavamfoundation.com",
    ],
  },
  // images: {
  //   domains: ["localhost"],
  // },
};

export default nextConfig;
