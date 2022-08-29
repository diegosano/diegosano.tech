import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import { Main } from '../layouts/Main'

import { theme } from '../lib/theme'

export default function Website({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GA_ID,
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}
