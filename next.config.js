/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Static exports
  // Read more: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: isProd ? "export" : "standalone",

  // By default, Next.js maps all static assets the domain. 
  // This means that the favicon.ico file will be resolved to gitterence.github.io/favicon.ico 
  // instead of gitterence.github.io/portfolio/favicon.icon.
  basePath: isProd ? '/portfolio' : '', 

  // Note: Image Optimization using the default loader is not compatible with `{ output: 'export' }`.
  // If using `next/image`, it might need to unoptimize images for static export
  // Read more: https://nextjs.org/docs/messages/export-image-api
  images: { unoptimized: true },
};

module.exports = nextConfig;
