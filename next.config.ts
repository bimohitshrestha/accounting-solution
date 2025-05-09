import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    images: {
      remotePatterns: [new URL('http://192.168.100.66:8080/**')],
    },
  
  }


export default nextConfig;
