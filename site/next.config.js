/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KMRSolutions Kasm Registry',
    description: 'KMRSolutions store for Kasm supported workspaces.',
    icon: 'https://www.kmrsolutions.co.uk/assets/images/logo1.png',
    listUrl: 'https://kevinrook.github.io/kasm-registry/',
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
