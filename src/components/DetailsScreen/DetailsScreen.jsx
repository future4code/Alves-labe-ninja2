import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Center, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box, Image } from '@chakra-ui/react'
import Ninja from '../../assets/ninja.png'
export default class DetailsScreen extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    payment: [],
    date: "",
    taken: false
  }

  componentDidMount() {
    this.getJobById(this.props.jobId)
  }

  getJobById = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs/${id}`, headers)
      this.setState({
        title: res.data.title,
        description: res.data.description,
        price: res.data.price,
        payment: res.data.paymentMethods,
        date: res.data.dueDate,
        taken: res.data.taken
      })
      console.log(this.state)
    }
    catch (error) {
      console.log(error.response.data.message)
    }
  }

  convertDate = (date) => {
    const partDate = date.split('T')[0]
    return partDate.split('-').reverse().join('/')
  }

  render() {
    return (
      <Flex direction='column'  alignItems='center' mt='1rem'>
        <Flex direction='column' justifyContent='space-evenly'  shadow='dark-lg' alignItems='center' borderRadius='2rem' p='1rem' w='35rem' h='32rem'>
          <Image w='8rem' src={Ninja} alt='ícone '/>
          <Heading color='blue.200' textAlign='center' fontSize='2rem'>{this.state.title}</Heading>
          <Text color='blue.200' fontSize='1.5rem'>Descrição: {this.state.description}</Text>
          <Text color='blue.200' fontSize='1.5rem'>Valor: R$ {this.state.price},00</Text>
          <Text color='blue.200' fontSize='1.5rem'>Forma de pagamento: {this.state.payment}</Text>
          <Text color='blue.200' fontSize='1.5rem'>{this.convertDate(this.state.date)}</Text>
          <Button bg='beige.200' color='blue.200' border='1px' borderColor='blue.200' fontSize='1.5rem' w='18rem'>Adicionar ao Carrinho </Button>
          <Button bg='beige.200' color='blue.200' border='1px' borderColor='blue.200' fontSize='1.5rem' w='5rem' onClick={this.props.goToContracting}>Voltar</Button>
        </Flex>
      </Flex>


    )
  }
}
