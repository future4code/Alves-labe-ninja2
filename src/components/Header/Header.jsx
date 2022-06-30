import { Button, Flex, Image, HStack, Text, Box, ButtonGroup, Heading, Center } from '@chakra-ui/react'
import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
export default class Header extends Component {
  state = {
    shopping: false 
  }

 

  showCart  = () => {
  this.state.shopping = !this.state.shopping
  this.setState ({ shopping: this.state.shopping})
  }

  render() {
    let componentCart
    if (this.state.shopping) {
    componentCart =  < Cart />   
    }
    return (
      <HStack justifyContent='space-between'  bg='beige.200' mw='100%' h='7rem' alignItems='center' >
        <Image  ml="0.5rem"src={Logo} alt='logo raposa' h='90%' />
        <Center>
        <Heading pl='5rem' color="red.200">FOX Ninjas</Heading>
        </Center>
        <ButtonGroup >
          <Button h='3rem' w='5rem'color='beige.200' bg='blue.200' onClick={() => this.props.goToHome()}>Home</Button>
          <Button h='3rem' w='5rem' color='beige.200' bg='blue.200' mr='1rem'onClick={() => this.showCart()}><FiShoppingCart fontSize='1.5rem' /></Button>
        </ButtonGroup>
        {componentCart}
      </HStack>
    )
  }
}
