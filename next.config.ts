/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,   // Počkej 300ms po změně před rebuildem
    }
    return config
  },
}

module.exports = nextConfig