import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Section = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
