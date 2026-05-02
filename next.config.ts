import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CCMG_Website_design_testing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
