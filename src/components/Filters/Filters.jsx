import React, { Component } from 'react'
import { Flex, InputGroup, InputLeftElement, Spacer, Heading, ButtonGroup, Button, Input, Select, Text, Box} from '@chakra-ui/react'
import { FaSistrix } from "react-icons/fa";
import { withTheme } from '@emotion/react';

export default class Filters extends Component {
  render() {
    return (
      <div>
            <Flex justify='center' gap='10'>
                <Input  _placeholder={{opacity: '0.8'}} maxW='300px' mt='20px'
                onChange={this.props.changeName}
                value={this.props.filterName}
                 placeholder="Busca" 
                />              
                <Input   _placeholder={{opacity: '0.8'}} maxW='300px' mt='20px'
                type="number"         
                onChange={this.props.changeMin} 
                value={this.props.filterMin}
                placeholder="Valor mínimo"
                />
                <Input   _placeholder={{opacity: '0.8'}} maxW='300px' mt='20px'
                type="number" 
                onChange={this.props.changeMax} 
                value={this.props.filterMax} 
                placeholder="Valor máximo"
                />
                {/* FALTA O SELECT */}
            </Flex>
      </div>
    )
  }
}

