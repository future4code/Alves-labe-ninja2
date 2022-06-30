import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box } from '@chakra-ui/react'
import Filters from '../Filters/Filters'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'
import Cart from '../Cart/Cart'
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
    this.setState({ filterMinValue: event.target.value })
  }

  handleFilterMaxValue = (event) => {
    this.setState({ filterMaxValue: event.target.value })
  }

  handleFilterNameValue = (event) => {
    this.setState({ filterNameValue: event.target.value })
  }

  handleFilterOrderValue = (event) => {
    this.setState({ filterOrderValue: event.target.value })
  }

  /*---------------------------------------------- */

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, headers)
      this.setState({ list: res.data.jobs })
      console.log(this.state.list) // Só para conferir no console
    }
    catch (error) {
      console.log(error.response.data.message)
    }
  }


  render() {
    
    <Cart filterCar={this.state.filterCar} list={this.state.list} totalCar={this.state.totalCar} />

    /* FALTA O SORT */
    const displayAllJobs = this.state.list.filter((job) => {
      return this.state.filterMinValue == "" || job.price >= this.state.filterMinValue
    })
      .filter((job) => {
        return this.state.filterMaxValue == "" || job.price <= this.state.filterMaxValue
      })
      .filter((job) => {
        return job.title.toLowerCase().includes(this.state.filterNameValue.toLowerCase()) || job.description.toLowerCase().includes(this.state.filterNameValue.toLowerCase())
      })
      .map((job) => {
        
        return (

          <Flex h='18rem' shadow='dark-lg' borderRadius='2rem' p='1rem' border='1px' bg='blue.200' minW='250px' gap='10px' direction='column' m='5px' key={job.id}>
            <Heading bg='blue.200' color='beige.200' textAlign='center'>{job.title}</Heading>
            <Text bg='blue.200' color='beige.200' textAlign='center'>Preço: R${job.price}</Text>
            <Text bg='blue.200' color='beige.200' textAlign='center'>Prazo: {job.dueDate}</Text>
            <Flex direction='column' mt='1rem'>
            <Button bg='beige.200' color='blue.200' rightIcon={<InfoIcon color='red.200' />} iconSpacing='2'
              onClick={() => this.props.goToDetails(job.id)}>Detalhes</Button>
            <Button bg='beige.200' color='blue.200' mt='1.2rem' rightIcon={<CheckCircleIcon color='red.200' />} iconSpacing='1'
            onClick={() => this.props.clickAddJob(job.id)}> Contratar</Button>
            </Flex>
          </Flex>
        )
      })

    return (
      <Flex direction='column' bg='white'>
        <Box>
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
        </Box>
        <Flex justify='center' wrap='wrap' mt='20px'>
          {displayAllJobs}
        </Flex>
      </Flex>
    )
  }
}
