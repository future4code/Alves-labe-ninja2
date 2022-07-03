import React, { Component } from 'react'
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import  David  from './img/david-perfil.jpg'

export default class Devs extends Component {
  render() {
const DevsCard = () => {
    return (
    <Flex
      p='10px'
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        h='270px'
        w='180px'
        overflow="hidden"
        mx="auto"
      >
        <Image
          borderRadius={'50%'}
          w='100%'
          h='60%'
          src={this.props.image}
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color="beige.200"
            fontWeight="bold"
            href={this.props.link}
            target='_blank'
          >
            {this.props.name}
          </Link>
          <chakra.span
            fontSize="m"
            color="beige.200"
          >
            Full Stack Developer
          </chakra.span>
        </Box>
      </Box>
    </Flex>
    )
}
    return (
      <Flex>
        <DevsCard/>
    </Flex>
    )
  }
}
