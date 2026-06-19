import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["three"],
  transpilePackages: ["@studio-freight/lenis"],
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
