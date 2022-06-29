import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import Select from 'react-select'
import { Flex, Spacer, Heading, ButtonGroup, Button, Input, Text, Box } from '@chakra-ui/react'

const options = [
    { value: 1, label: " Cartão de Débito" },
    { value: 2, label: " Cartão de Crédito" },
    { value: 3, label: " Pix" },
    { value: 4, label: " Paypal" },
    { value: 5, label: " Boleto" },
    { value: 6, label: " Dinheiro" },
];


export default class RegistrationScreen extends Component {
    state = {
        title: "",
        description: "",
        price: "",
        payment: [],
        date: ""
    }


    createNewJob = async () => {
        console.log("clicou")
        const newJob = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            paymentMethods: this.state.payment,
            dueDate: this.state.date
        }
        try {
            const res = await axios.post(`${BASE_URL}/jobs`, newJob, headers)
            console.log(res)
            alert(`Cadastro afetuado`)
            this.setState({
                title: "",
                description: "",
                price: "",
                payment: [],
                date: "",
            })

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleDescripton = (event) => {
        this.setState({ description: event.target.value })
    }

    handlePrice = (event) => {
        this.setState({ price: event.target.value })
    }

    handlePayment = (event) => {
        this.setState({
            payment: Array.isArray(event) ? event.map((x) => x.label) : [],
        })
    }

    handleDate = (event) => {
        this.setState({ date: event.target.value })
    }



    render() {
        return (
            <Flex justifyContent='center'>
                <Flex direction="column" w='35rem' h='43rem' bg='red.150'>
                    <h1>Cadastre-se para ser um Ninja!</h1>
                    <Text>Teste</Text>
                    <Input value={this.state.title} onChange={this.handleTitle} mt='8%' mb='4%' placeholder='Título do anúncio'></Input>
                    <Input value={this.state.description} onChange={this.handleDescripton} mb='4%' placeholder='Descrição do serviço prestado'></Input>
                    <Input value={this.state.price} onChange={this.handlePrice} mb='4%' type='number' placeholder='Informe o preço'></Input>
                    <Select
                    isMulti
                    options={options} 
                    placeholder='Informe as formas de pagamento aceitas' 
                    onChange={this.handlePayment}
                    onSelect={this.handlePayment} 
                    />
                    <Input value={this.state.date} onChange={this.handleDate} type='date'  mt='4%' mb='4%' placeholder='Informe o prazo disponível' ></Input>
                    <Button onClick={() => this.createNewJob()}>Cadastrar Serviço</Button>
                </Flex>
            </Flex>
        )
    }
}
