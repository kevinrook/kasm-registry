/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KMRSolutions Kasm Registry',
    description: 'KMRSolutions store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/kevinrook/',
    contactUrl: 'https://github.com/kevinrook/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
