import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Center, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'

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

  render() {
    return (
      
        
          <Flex direction='column' justify='center' align='center'>
            
              <Heading>{this.state.title}</Heading>
              <Text>{this.state.description}</Text>
              <Text>{this.state.price}</Text>
              <Text>{this.state.payment}</Text>
              <Text>{this.state.date}</Text>
              <Button maxW='20' onClick={this.props.goToContracting}>Voltar</Button>
            
          </Flex>
        
       
    )
  }
}
