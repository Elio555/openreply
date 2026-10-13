import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  // SuperDM has no public landing yet: send the home page straight to sign-in
  // (which forwards signed-in users to the dashboard). Temporary on purpose,
  // so browsers do not cache it once a landing page exists.
  async redirects() {
    return [{ source: "/", destination: "/login", permanent: false }];
  },
};

export default nextConfig;
