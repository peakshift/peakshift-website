/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/home',
            destination: '/',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
