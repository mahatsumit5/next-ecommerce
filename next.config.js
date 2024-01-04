/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfw-image-bucket.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stripe-camo.global.ssl.fastly.net",
        port: "",
        pathname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
