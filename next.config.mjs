/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // Match all static assets in /_next/static
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for one year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
