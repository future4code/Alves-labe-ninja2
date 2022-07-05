import React, { Component } from 'react'
import { Flex, Spacer, Image, Heading, ButtonGroup, Button, Input, Select, Text, Box } from '@chakra-ui/react'
import { FaTrashAlt } from "react-icons/fa";
import Ninja from '../../assets/ninja.png'

export default class Cart extends Component {

  render() {
    const mapCart = this.props.idItemsCart.map((job) => {
      return (
        <Flex justifyContent="space-between" alignItems='center' key={job.id} >
          <Image w='3.9rem' src={Ninja} alt='Ninja com sacolas ' />
          <Box p='0.5rem'>
            <Heading color='blue.200' fontSize='1.5rem'>{job.title}</Heading>
            <Text color='blue.200' fontSize='1.5rem'> R${job.price}</Text>
          </Box>
          <Button _hover={{ bg: 'beige.200' }} bg='transparent' fontSize='2rem' color="red.200" onClick={() => { this.props.removeJob(job) }}><FaTrashAlt  /></Button>
        </Flex>
      )
    })
    return (

      <Flex textAlign='justify' pt='3rem' direction='column' minH='85vh' alignItems='center' bgGradient="linear(to-t, blue.150, beige.200)">
        <Flex   direction='column' justifyContent='space-evenly' shadow='dark-lg' alignItems='center' borderRadius='2rem' p='1rem' w='35rem' maxH='35rem' h='35rem' backgroundColor='red.50' border='2px' borderColor='red.150'>
          <Heading color='blue.200' fontSize='2rem'>Carrinho de Compras</Heading>
          <Box w='28rem' m='2rem' maxH='39rem'  overflowY='auto'>{mapCart}</Box>
          <Text fontWeight='bold' color='blue.200' fontSize='1.5rem'>Valor total: R${this.props.totalCart}</Text>
          <Button mt='1rem' _hover={{ bg: 'red.200' }} bg='blue.200' color='beige.200' fontSize='1.2rem' w='18rem' h='3rem' p='0.7rem' onClick={() => this.props.finallyShopping()}>Finalizar Compra</Button>
          <Button mt='1rem' _hover={{ bg: 'red.200' }} bg='blue.200' color='beige.200' fontSize='1.2rem' w='18rem' h='3rem' p='0.7rem' onClick={() => this.props.goToContracting()}>Contratar mais ninjas</Button>
        </Flex>
      </Flex>
    )
  }
}
