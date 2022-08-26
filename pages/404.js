import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>

      <Text>The page you are looking for does not exist.</Text>

      <Divider my={8} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme={useColorModeValue('purple', 'orange')}>
            Return to homepage
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}
