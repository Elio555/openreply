import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  // Serve the SuperDM landing at "/" while leaving upstream's app/page.tsx
  // untouched, so upstream updates to it still merge cleanly.
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/superdm" }] };
  },
  async redirects() {
    return [{ source: "/superdm", destination: "/", permanent: true }];
  },
};

export default nextConfig;
