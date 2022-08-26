import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react'
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiMailFill,
} from 'react-icons/ri'

import { Section } from '../components/Section'
import { Article } from '../layouts/Article'

export default function Page() {
  return (
    <Article>
      <Container>
        <Section delay={0.1}>
          <Box
            display="flex"
            flexDirection={{ base: 'column-reverse', md: 'row' }}
          >
            <Box flexGrow={1}>
              <Heading
                as="h2"
                fontSize={40}
                variant="page-title"
                textAlign={{ base: 'center', md: 'left' }}
                mb={4}
              >
                Diego Sano
              </Heading>

              <Box
                borderRadius="lg"
                bg={useColorModeValue('#282a36', 'whiteAlpha.200')}
                color="whiteAlpha.900"
                p={3}
                mb={4}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Hello, I&apos;m a Software Developer based on Brazil!
              </Box>
            </Box>

            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                borderColor={useColorModeValue(
                  'blackAlpha.900',
                  'whiteAlpha.800',
                )}
                borderWidth={2}
                borderStyle="solid"
                maxWidth="120px"
                display="inline-block"
                borderRadius="full"
                src="/images/diegosano.jpg"
                alt="Profile image"
              />
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Stack
            as="section"
            direction="column"
            spacing={4}
            align="center"
            mt={{ base: 4, md: 0 }}
          >
            <NextLink href="https://github.com/diegosano/" passHref>
              <Button
                as="a"
                target="_blank"
                referrerPolicy="no-referrer"
                width="100%"
                leftIcon={<RiGithubFill />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                Github
              </Button>
            </NextLink>

            <NextLink href="https://www.linkedin.com/in/diego-sano/" passHref>
              <Button
                as="a"
                target="_blank"
                referrerPolicy="no-referrer"
                width="100%"
                leftIcon={<RiLinkedinBoxFill />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                LinkedIn
              </Button>
            </NextLink>

            <NextLink href="https://www.instagram.com/diego_ceccarelli/" passHref>
              <Button
                as="a"
                target="_blank"
                referrerPolicy="no-referrer"
                width="100%"
                leftIcon={<RiInstagramLine />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                Instagram
              </Button>
            </NextLink>

            <NextLink href="mailto:diegocsano@outlook.com" passHref>
              <Button
                as="a"
                target="_blank"
                referrerPolicy="no-referrer"
                width="100%"
                title="diegocsano@outlook.com"
                leftIcon={<RiMailFill />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                Contact me
              </Button>
            </NextLink>
          </Stack>
        </Section>
      </Container>
    </Article>
  )
}
