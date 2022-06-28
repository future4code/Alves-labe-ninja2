import React, { Component } from 'react'
import axios from "axios"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme'
import { Box } from "@chakra-ui/react"
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Select, Text } from '@chakra-ui/react'

export default class RegistrationScreen extends Component {
    state = {
        title: "",
        description: "",
        price: "",
        payment: "",
        date: ""
    }

    render() {
        return (
            <ChakraProvider theme={theme}>
                <Flex justifyContent='center'>
                    <Box flexDirection="column" w='35rem' h='43rem' bg='blue.150'>
                        <h1>Cadastre-se para ser um Ninja!</h1>
                        <Text>Teste</Text>
                        <Input mt='8%' mb='4%' placeholder='Título do anúncio'></Input>
                        <Input mb='4%' placeholder='Descrição do serviço prestado'></Input>
                        <Input mb='4%' type='number' placeholder='Informe o preço'></Input>
                        <Select mb='4%' placeholder='Informe as formas de pagamento aceitas'>
                            <option value='option1'>Pix</option>
                            <option value='option2'>Dinheiro</option>
                            <option value='option3'>Cartão de Crédito</option>
                            <option value='option4'>Cartão de Débito</option>
                        </Select>
                        <Input type='date' placeholder='Informe o prazo disponível'></Input>
                    </Box>
                </Flex>


            </ChakraProvider>
        )
    }
}
