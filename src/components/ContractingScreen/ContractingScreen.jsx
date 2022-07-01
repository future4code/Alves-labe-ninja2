import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Spacer, Image, Heading, ButtonGroup, Button, Input, Select, Text, Box } from '@chakra-ui/react'
import Filters from '../Filters/Filters'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'
import Loading from '../../assets/ninjagif.gif'
import Cart from '../Cart/Cart'
// import DetailsScreen from '../DetailsScreen/DetailsScreen'

export default class ContractingScreen extends Component {
  state = {
    // list: {this.props.list},
    filterMinValue: '',
    filterMaxValue: '',
    filterNameValue: '',
    sortingParameter: '',
    // removeLoading: false,
  }
  newList = [...this.props.list]
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


  handleSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value })
  }

  /*---------------------------------------------- */

  componentDidMount() {
    {this.props.getAllJobs()}
  }

  convertDate = (date) => {
    const partDate = date.split('T')[0]
    return partDate.split('-').reverse().join('/')
  }

  render() {

    const displayAllJobs = this.newList.filter((job) => {
      return this.state.filterMinValue == "" || job.price >= this.state.filterMinValue
    })
      .filter((job) => {
        return this.state.filterMaxValue == "" || job.price <= this.state.filterMaxValue
      })
      .filter((job) => {

        return job.title.toLowerCase().includes(this.state.filterNameValue.toLowerCase())
      })
      .sort((currentJob, nextJob) => {
        switch (this.state.sortingParameter) {
          case "title":
            return currentJob.title.localeCompare(nextJob.title)
          case "dueDate":
            console.log(currentJob.dueDate, nextJob.dueDate)
            return new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime()
          case "priceAsc":
            return currentJob.price - nextJob.price
          case "priceDesc":
            return -(currentJob.price - nextJob.price)
        }
      })
      .map((job) => {
        return (

          <Flex _hover={{ bg: 'red.200' }} borderRadius='10px' border='1px' shadow='dark-lg' bg='blue.200' minW='250px' gap='10px' direction='column' m='5px' p='15px' key={job.id}>
            <Heading color='beige.200' textAlign='center'>{job.title}</Heading>
            <Text color='beige.200' textAlign='center'>Preço: R${job.price}</Text>
            <Text color='beige.200' textAlign='center'>Prazo: {this.convertDate(job.dueDate)}</Text>
            <Flex direction='column' mt='1rem'>
              <Button bg='beige.200' color='blue.200' rightIcon={<InfoIcon color='red.200' />} iconSpacing='2' _hover={{ bg: 'white', color: 'blue.200' }}
                onClick={() => this.props.goToDetails(job.id)}>Detalhes</Button>
              <Button bg='beige.200' color='blue.200' mt='1.2rem' rightIcon={<CheckCircleIcon color='red.200' />} iconSpacing='1' _hover={{ bg: 'white', color: 'blue.200' }}
                onClick={() => this.props.clickAddJob(job.id)}> Contratar
              </Button>
            </Flex>
          </Flex>
        )
      })

    return (
      <Flex direction='column' minH='85vh' alignItems='center'  bgGradient="linear(to-t, blue.150, beige.200)">
        <Box>
          <Filters
            changeMin={this.handleFilterMinValue}
            filterMin={this.state.filterMinValue}
            changeMax={this.handleFilterMaxValue}
            filterMax={this.state.filterMaxValue}
            changeName={this.handleFilterNameValue}
            filterName={this.state.filterNameValue}
            changeOrder={this.handleSortingParameter}
            filterOrder={this.state.sortingParameter}
          />
        </Box>
        <Flex justify='center' wrap='wrap' mt='20px'>
          {displayAllJobs}
        </Flex>
        {/* {!this.state.removeLoading && <Image pt='13rem' w='18rem' src={Loading} alt='gif loading' />} */}
      </Flex>
    )
  }
}
