import '../styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mantine lesson</title>
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
