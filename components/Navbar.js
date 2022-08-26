import {
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'

import { ThemeTogglerButton } from './ThemeTogglerButton'

export const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{
        backdropFilter: 'blur(10px)',
      }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={1} align="right">
          <ThemeTogglerButton />
        </Box>
      </Container>
    </Box>
  )
}
