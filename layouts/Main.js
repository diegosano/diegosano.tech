import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import NoSSR from '../components/NoSSR'
import { Computer } from '../components/Computer'
import { Navbar } from '../components/Navbar'

export const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} height="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Diego Sano | Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <Computer />
        </NoSSR>

        {children}
      </Container>
    </Box>
  )
}
