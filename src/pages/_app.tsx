import Head from 'next/head'

import '@styles/colors.css'
import '@styles/sizes.css'
import '@styles/font.css'
import '@styles/globals.css'
import '@styles/hljs.css'

import { Page } from '@components/Page'
import { Header } from '@components/Header'
import { Content } from '@components/Content'
import { Footer } from '@components/Footer'

type Props = {
  Component: React.ComponentType<any>,
  pageProps: any
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Page>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="preload"
          href="/font/LeagueMono-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/font/LeagueMono-Medium.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />

      <Component {...pageProps} />

      <Content>
        <Footer />
      </Content>
    </Page>
  )
}
