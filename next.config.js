const withOffline = require('next-offline')

const offlineConfig = withOffline({
  pageExtensions: ["tsx"],
  trailingSlash: true,
  experimental: { esmExternals: true },
  workboxOpts: {
    swDest: '../public/service-worker.js',
  }
})

const withSvgr = (nextConfig) => {
  const { webpack: enhanceWebpack, ...rest } = nextConfig
  console.log("offlineConfig:", rest)
  rest.exportPathMap().then(res => console.log("res:", res))
  return {
    ...rest,
    webpack(config, options) {
      const result = enhanceWebpack(config, options)

      result.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { typescript: true, svgo: false } }],
      })

      return result
    }
  }
}

/** @type {import('next').NextConfig} */
module.exports = withSvgr(offlineConfig)
