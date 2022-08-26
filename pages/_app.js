import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import { Main } from '../layouts/Main'

import { theme } from '../lib/theme'

export default function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}
