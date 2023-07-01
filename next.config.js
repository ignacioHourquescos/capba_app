/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  locales: ['es-ES'],
  defaultLocale: 'es-ES',
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
