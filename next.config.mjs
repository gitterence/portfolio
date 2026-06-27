/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Directly set to export since we are deploying a static site to GitHub Pages.
  // Next.js development server (next dev) automatically ignores this, so we don't need conditional logic here.
  output: "export",

  // By default, Next.js maps all static assets the domain. 
  // This means that the favicon.ico file will be resolved to gitterence.github.io/favicon.ico 
  // instead of gitterence.github.io/portfolio/favicon.icon.
  basePath: isProd ? '/portfolio' : '', 

  // Image Optimization using the default loader is not compatible with `{ output: 'export' }`.
  images: { unoptimized: true },
};

export default nextConfig;
