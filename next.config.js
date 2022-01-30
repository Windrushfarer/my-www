const withPWA = require('next-pwa')

const offlineConfig = withPWA({
  pageExtensions: ["tsx"],
  trailingSlash: true,
  experimental: { esmExternals: true },
  pwa: {
    dest: 'public'
  }
})

const withSvgr = (nextConfig) => {
  const { webpack: enhanceWebpack, ...rest } = nextConfig

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
