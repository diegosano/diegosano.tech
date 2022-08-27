import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'

import { Navbar } from '../components/Navbar'
import { ComputerLoader } from '../components/ComputerLoader'

const LazyComputer = dynamic(
  () => import('../components/Computer').then(mod => mod.Computer),
  {
    ssr: false,
    loading: () => <ComputerLoader />,
  },
)

export const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} height="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Diego Sano's website" />
        <meta name="author" content="Diego Sano" />
        <meta property="og:site_name" content="Diego Sano's website" />
        <meta property="og:type" content="website" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Diego Sano | Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyComputer />

        {children}
      </Container>
    </Box>
  )
}
