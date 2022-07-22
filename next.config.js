module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/endpoints/:path*',
          destination: `https://www.cronica.com.ar/endpoints/:path*`,
        },
      ],
    }
  },
}
