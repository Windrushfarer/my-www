const withOffline = require('next-offline')

/** @type {import('next').NextConfig} */
module.exports = withOffline({
  pageExtensions: ["tsx"],
  trailingSlash: true,
  experimental: { esmExternals: true },
  workboxOpts: {
    swDest: '../public/service-worker.js',
  }
})
