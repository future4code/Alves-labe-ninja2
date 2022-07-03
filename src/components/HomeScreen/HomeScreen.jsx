import React, { Component } from 'react'
import { Flex, Image} from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import {CardHome} from './CardHome'


export default class HomeScreen extends Component {

  render() {

    return (
      <Flex direction='column'alignItems='center' minH='80vh' bgGradient="linear(to-t, blue.150, beige.200)" >
        <Image src={Logo} alt='logo raposa' p="1rem" pr="3.5rem" h='50vh' w='30vw' />
        <CardHome/>
      </Flex>
    )
  }
}
