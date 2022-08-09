import '../styles/globals.css'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

const appendCache = createEmotionCache({ key: 'mantine', prepend: false })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={appendCache}
      >
        {/* <SpotlightProvider actions={[]}> */}
        <Component {...pageProps} />
        {/* </SpotlightProvider> */}
      </MantineProvider>
    </>
  )
}

export default MyApp
