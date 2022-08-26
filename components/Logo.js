import Link from 'next/link'
import { Button, Text, useColorModeValue } from '@chakra-ui/react'

export const Logo = () => {
  return (
    // <Link href="/">
    //   <a>
    //     <Text
    //       color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    //       // fontFamily="M PLUS Rounded 1c"
    //       fontWeight="bold"
    //       fontSize={18}
    //     >
    //       D
    //     </Text>
    //   </a>
    // </Link>
    <Link href="/">
      <Button variant="ghost">
        D
      </Button>
    </Link>
  )
}