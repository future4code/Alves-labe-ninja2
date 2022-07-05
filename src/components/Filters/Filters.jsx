import React, { Component } from 'react'
import { Flex, InputGroup, InputLeftElement, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'
import { FaSistrix } from "react-icons/fa";
import { withTheme } from '@emotion/react';

export default class Filters extends Component {
  render() {
    return (
      <div >
            <Flex justify='center' gap='10' >
                <Input _focus={{border: '2px',borderColor:'blue.200', bg:'red.100'}} variant='filled' _placeholder={{opacity: '0.9', color: 'blue.200'}} maxW='300px' mt='20px' border='2px' borderColor='blue.200' textColor='blue.200' boxShadow='base' fontWeight='bold'
                onChange={this.props.changeName}
                value={this.props.filterName}
                 placeholder="Busca" 
                />              
                <Input _focus={{border: '2px',borderColor:'blue.200', bg:'red.100'}} variant='filled' _placeholder={{opacity: '0.9', color: 'blue.200'}} maxW='300px' mt='20px' border='2px' borderColor='blue.200' textColor='blue.200' boxShadow='base' fontWeight='bold'
                type="number"         
                onChange={this.props.changeMin} 
                value={this.props.filterMin}
                placeholder="Valor mínimo"
                />
                <Input _focus={{border: '2px',borderColor:'blue.200', bg:'red.100'}} variant='filled' _placeholder={{opacity: '0.9', color: 'blue.200'}} maxW='300px' mt='20px' border='2px' borderColor='blue.200' textColor='blue.200' boxShadow='base' fontWeight='bold'
                type="number" 
                onChange={this.props.changeMax} 
                value={this.props.filterMax} 
                placeholder="Valor máximo"
                />
                
                <Select
                  name ="sort"
                  _focus={{border: '2px',borderColor:'blue.200', bg:'red.100'}} variant='filled'  _placeholder={{opacity: '0.9', color: 'blue.200', bg:'blue.50'}} maxW='300px' mt='20px' border='2px' borderColor='blue.200' textColor='blue.200' boxShadow='base' fontWeight='bold'
                  placeholder='Ordenar por:'
                  onChange={this.props.changeOrder}
                  onSelect={this.props.filterOrder}
                >
                  <option value="title">Título</option>
                  <option value="dueDate">Prazo</option>
                  <option value="priceAsc">Preço crescente</option>
                  <option value="priceDesc">Preço Decrescente</option>
                  
                </Select>
            </Flex>
      </div>
    )
  }
}

