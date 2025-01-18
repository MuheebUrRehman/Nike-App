/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "/**", // Match all paths under the Sanity CDN
        },
      ],
    },
  };
  
  export default nextConfig;
  