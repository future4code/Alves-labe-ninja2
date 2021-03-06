import { Button, Flex, Link, Image, HStack, Text, Box, ButtonGroup, Heading, Center } from '@chakra-ui/react'
import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
export default class Header extends Component {
  

  render() {

    return (
      <HStack justifyContent='space-between'  bg='beige.200' mw='100%' h='15vh' alignItems='center' >
        <Link onClick={() => this.props.goToHome()}
        ><Image ml="0.5rem"src={Logo} alt='logo raposa' w='6.5rem' h='6.5em' /></Link>
        <Center>
        <Heading pl='6rem' color="red.200">FOX Ninjas</Heading>
        </Center>
        <ButtonGroup >
          <Button h='3rem' w='5rem'color='beige.200' bg='blue.200' _hover={{bg:'red.200'}} onClick={() => this.props.goToHome()}>Home</Button>
          <Button h='3rem' w='5rem' color='beige.200' bg='blue.200' _hover={{bg:'red.200'}} mr='1rem'onClick={() => this.props.goToCard()}><FiShoppingCart fontSize='1.5rem' /></Button>
        </ButtonGroup>

      </HStack>
    )
  }
}
