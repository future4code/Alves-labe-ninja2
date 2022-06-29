import React, { Component } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <ChakraProvider>
            <Flex>
                <Input
                onChange={this.props.changeName}
                value={this.props.filterName}
                placeholder="Busca" 
                />
                <Input
                type="number"         
                onChange={this.props.changeMin} 
                value={this.props.filterMin}
                placeholder="Valor mínimo"
                />
                <Input
                type="number" 
                onChange={this.props.changeMax} 
                value={this.props.filterMax} 
                placeholder="Valor máximo"
                />
                {/* FALTA O SELECT */}
            </Flex>
        </ChakraProvider>
      </div>
    )
  }
}

