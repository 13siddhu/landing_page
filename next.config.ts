import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["172.25.227.61"],
  },
};

export default nextConfig;
