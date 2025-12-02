// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google thumbnails (your gas turbines, generators, compressors, etc.)
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**", // ← changed from /images?q=tbn:ANd9Gc** to /** → covers everything
      },

      // Vecteezy (your steam turbine)
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },

      // EC-MA WordPress (your pumps image)
      {
        protocol: "https",
        hostname: "www.ec-ma.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },

      // Squarespace CDN (your control systems image)
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/**",
      },

      // Bonus: Unsplash (in case you use it later)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
