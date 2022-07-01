import React, { Component } from 'react'
import { Button, Flex, Image, HStack, Text, ButtonGroup, Heading, Box } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'


export default class HomeScreen extends Component {

  render() {

    return (
      <Flex direction='column'alignItems='center' h='85vh' bgGradient="linear(to-t, blue.150, beige.200)" >
        <Image src={Logo} alt='logo raposa' p="1rem" pr="3.5rem" h='50vh' w='30vw' />
        <ButtonGroup mt='3.7rem'>
        <Button _hover={{bg:'red.200'}} w='170px' color='beige.200' bg='blue.200' onClick={() => this.props.goToContracting()}>Contrate um Ninja!</Button>
        <Button  _hover={{bg:'red.200'}} w='170px' color='beige.200' bg='blue.200'onClick={() => this.props.goToRegistration()}>Seja um Ninja!</Button>
        </ButtonGroup>
      </Flex>
    )
  }
}
