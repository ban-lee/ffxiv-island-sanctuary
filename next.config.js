/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/ffxiv-island-sanctuary',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ffxiv-island-sanctuary',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
