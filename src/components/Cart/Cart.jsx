import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import { Flex, Spacer, Image, Heading, ButtonGroup, Button, Input, Select, Text, Box } from '@chakra-ui/react'

export default class Cart extends Component {
  state = {
    title: "",
    price: "",
    taken: false,
    totalCart: 0
  }

  render() {
  
    return(
      <div>
      {/* { displayCart() } */}
          
      </div >
    )
  }
}
