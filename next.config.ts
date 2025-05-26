import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    images: {
      remotePatterns: [new URL('http://192.168.100.91:8088/**')],
    },
  
  }


export default nextConfig;
