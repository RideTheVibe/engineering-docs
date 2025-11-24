import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: '/docs',
    trailingSlash: true, // Force trailing slashes
    skipTrailingSlashRedirect: true, // Prevent Next.js from redirecting
};

export default withMDX(config);
