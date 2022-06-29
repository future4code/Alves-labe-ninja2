import React, { Component } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'
import Filters from '../Filters/Filters'
// import DetailsScreen from '../DetailsScreen/DetailsScreen'

export default class ContractingScreen extends Component {
  state = {
    list: [],
    filterMinValue: '',
    filterMaxValue: '',
    filterNameValue: '',
    filterOrderValue: 1,
  }

  /*  FUNÇÕES PARA ATUALIZAR OS INPUTS DOS FILTROS */

  handleFilterMinValue = (event) => {
    this.setState({filterMinValue: event.target.value})
  }

  handleFilterMaxValue = (event) => {
    this.setState({filterMaxValue: event.target.value})
  }

  handleFilterNameValue = (event) => {
    this.setState({filterNameValue: event.target.value})
  }

  handleFilterOrderValue = (event) => {
    this.setState({filterOrderValue: event.target.value})
  }

  /*---------------------------------------------- */

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

    /* FALTA O SORT */
    const displayAllJobs = this.state.list.filter((job) => {
      return this.state.filterMinValue == "" || job.price >= this.state.filterMinValue
    })
    .filter((job) => {
      return this.state.filterMinValue == "" || job.price <= this.state.filterMaxValue
    })
    .filter((job) => {
      return job.title.toLowerCase().includes(this.state.filterNameValue.toLowerCase()) || job.description.toLowerCase().includes(this.state.filterNameValue.toLowerCase())
    })
    .map((job) => {
      return (
        <ChakraProvider key={job.id}>
          <Flex direction='column' bg='red.150'>
            <Box>
              <Heading>{job.title}</Heading>
              <Text>Preço: R${job.price}</Text>
              <Text>Prazo: {job.duoDate}</Text>
              <Text>{job.description}</Text>
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
        <Filters 
        changeMin={this.handleFilterMinValue}
        filterMin={this.state.filterMinValue}
        changeMax={this.handleFilterMaxValue}
        filterMax={this.state.filterMaxValue}
        changeName={this.handleFilterNameValue}
        filterName={this.state.filterNameValue}
        changeOrder={this.handleFilterOrderValue}
        filterOrder={this.state.filterOrderValue}
        />
        {displayAllJobs}
      </div>
    )
  }
}
