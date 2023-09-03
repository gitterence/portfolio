/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Static exports
  // Read more: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: isProd ? "export" : "standalone",

  // Note: Image Optimization using the default loader is not compatible with `{ output: 'export' }`.
  // Read more: https://nextjs.org/docs/messages/export-image-api
  images: { unoptimized: true },
};

module.exports = nextConfig;
