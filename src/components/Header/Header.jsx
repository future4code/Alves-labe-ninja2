import { Button, Flex, Image, HStack, Text, Box, ButtonGroup, Heading } from '@chakra-ui/react'
import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import { FiShoppingCart } from 'react-icons/fi'

export default class Header extends Component {

  render() {
    return (
      <HStack justifyContent='space-between'  bg='beige.200' mw='100%' h='7rem' alignItems='center' >
        <Image src={Logo} alt='logo raposa' h='90%' />
        <Heading color="red.200">FOX Ninjas</Heading>
        <ButtonGroup >
          <Button h='3rem' w='5rem'onClick={() => this.props.goToHome()}>Home</Button>
          <Button h='3rem' w='5rem' mr='1rem'onClick={() => this.props.goToCard()}><FiShoppingCart fontSize='1.5rem' /></Button>
        </ButtonGroup>
      </HStack>
    )
  }
}
