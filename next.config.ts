import type { NextConfig } from "next";

import next_pwa from "next-pwa";

const withPWA = next_pwa({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});


module.exports = withPWA({
  reactStrictMode: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
