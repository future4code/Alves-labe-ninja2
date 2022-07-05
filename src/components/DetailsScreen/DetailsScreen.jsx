import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Heading, Button, Text, Image } from '@chakra-ui/react'
import Ninja from '../../assets/ninja.png'
import Loading from '../../assets/ninjagif.gif'
import LoadingInvertido from '../../assets/ninjainvertido.gif'
export default class DetailsScreen extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    payment: [],
    date: "",
    taken: false,
    removeLoading: false,
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
      this.setState({ removeLoading: true })
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
      <Flex direction='column' alignItems='center' pt='1rem' minH='85vh' bgGradient="linear(to-t, blue.150, beige.200)">
        {this.state.title && this.state.description && this.state.price && this.state.payment && this.state.date ? 
        (
          <Flex direction='column' justifyContent='space-evenly' shadow='dark-lg' alignItems='center' borderRadius='2rem' p='1rem' w='35rem' h='32rem' backgroundColor='red.50' border='2px' borderColor='red.150'>
          <Image w='8rem' src={Ninja} alt='Ninja com sacolas ' />
          <Heading color='blue.200' textAlign='center' fontSize='2rem'>{this.state.title}</Heading>
          <Text textAlign='center' color='blue.200' fontSize='1.5rem'>{this.state.description}</Text>
          <Text textAlign='center' color='blue.200' fontSize='1.5rem'><strong>Valor:</strong> R$ {this.state.price},00</Text>
          <Text textAlign='center' color='blue.200' fontSize='1.5rem'><strong>Forma de pagamento:</strong> {this.state.payment}</Text>
          <Text textAlign='center' color='blue.200' fontSize='1.5rem'><strong>Até</strong> {this.convertDate(this.state.date)}</Text>
          <Button _hover={{ bg: 'red.200' }} bg='blue.200' color='beige.200' fontSize='1.2rem' w='5rem' onClick={this.props.goToContracting}>Voltar</Button>
          </Flex>
        ) : <Image pt='13rem' w='18rem' src={Loading} alt='gif loading' />
      }

      </Flex>


    )
  }
}
