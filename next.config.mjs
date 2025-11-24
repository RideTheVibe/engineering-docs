import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: '/docs',
    trailingSlash: false,
};

export default withMDX(config);
