import React, { Component } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Box } from '@chakra-ui/react'

export default class HomeScreen extends Component {
  
  render() {
    return (
      <ChakraProvider theme={theme}>

        <Box bg='blue.150'>HomeScreen</Box>
        <Box bg='red.150'>HomeScreen</Box>
        <Box bg='beige.150'>HomeScreen</Box>
      </ChakraProvider>
    )
  }
}
