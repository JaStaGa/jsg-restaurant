import type { NextConfig } from "next";

const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },

  // Allow your directory page to embed this app in an <iframe>
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // parents allowed to frame this site (prod + local)
            value:
              "frame-ancestors 'self' https://jsg-websites.onrender.com http://127.0.0.1:8000 http://localhost:8000",
          },
        ],
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
