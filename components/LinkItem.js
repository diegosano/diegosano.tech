import NextLink from 'next/link'
import { Link, useColorModeValue } from '@chakra-ui/react'

export const LinkItem = ({ href, path, children }) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={isActive ? 'glassTeal' : undefined}
        color={isActive ? '#202023' : inactiveColor}
        rounded="lg"
      >
        {children}
      </Link>
    </NextLink>
  )
}
