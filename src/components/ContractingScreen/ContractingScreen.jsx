import React, { Component } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'
// import DetailsScreen from '../DetailsScreen/DetailsScreen'

export default class ContractingScreen extends Component {
  state = {
    list: [],
    // jobId: ""
  }

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, headers)
      this.setState({list: res.data.jobs})
      console.log(this.state.list) // Só para conferir no console
    }
    catch (error) {
      console.log(error.response.data.message)
    }
  }


  render() {
    const displayAllJobs = this.state.list.map((job) => {
      return (
        <ChakraProvider key={job.id}>
          <Flex direction='column' bg='red.150'>
            <Box>
              <Heading>{job.title}</Heading>
              <Text>Preço: R${job.price}</Text>
              <Text>Prazo: {job.duoDate}</Text>
              <Button 
              onClick={() => this.props.goToDetails(job.id)}>Detalhes</Button>
              <Button>Adicionar ao carrinho</Button>
            </Box>
          </Flex>
        </ChakraProvider>
      )
    })
    return (
      <div>
        <p>ContractingScreen</p>
        {displayAllJobs}
      </div>
    )
  }
}
