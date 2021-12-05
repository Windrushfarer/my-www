import Head from 'next/head'

import '@styles/colors.css'
import '@styles/sizes.css'
import '@styles/globals.css'

import { Page } from '@components/Page'
import { Header } from '@components/Header'

type Props = {
  Component: React.ComponentType<any>,
  pageProps: any
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Page>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </Page>
  )
}
