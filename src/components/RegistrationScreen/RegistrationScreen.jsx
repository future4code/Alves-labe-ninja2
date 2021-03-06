import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, headers } from '../../constants/credentials'
import Select from 'react-select'
import { Flex, Button, Input, Text } from '@chakra-ui/react'
import { toast } from 'react-toastify';

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
        date: "",
        status: "error",
        resposta: false
    }


    createNewJob = async () => {
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
            this.setState({
                title: "",
                description: "",
                price: "",
                payment: [],
                date: "",
            })
            toast.success("Novo serviço adicionado")
        } catch (error) {
            console.log(error.response.data.message)
            this.setState({ resposta: true, status: "error" })
            toast.error("Algo deu errado, tente novamente")
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
            <Flex direction='column' pt='1rem' minH='85vh' alignItems='center' bgGradient="linear(to-t, blue.150, beige.200)">
                <Flex shadow='dark-lg' borderRadius='2rem' p='1rem' bg='blue.200' direction="column" w='35rem' h='32rem'>
                    <Text color='beige.200' textAlign='center' fontSize='2rem'>Cadastre-se para ser um Ninja!</Text>
                    <Input bg='white' value={this.state.title} onChange={this.handleTitle} mt='8%' mb='4%' placeholder='Título do anúncio'></Input>
                    <Input bg='white' value={this.state.description} onChange={this.handleDescripton} mb='4%' placeholder='Descrição do serviço prestado'></Input>
                    <Input bg='white' value={this.state.price} onChange={this.handlePrice} mb='4%' type='number' placeholder='Informe o preço'></Input>
                    <Select
                        isMulti
                        options={options}
                        placeholder='Informe as formas de pagamento aceitas'
                        onChange={this.handlePayment}
                        onSelect={this.handlePayment}
                    />
                    <Input bg='white' value={this.state.date} onChange={this.handleDate} type='date' mt='4%' mb='4%' placeholder='Informe o prazo disponível' ></Input>
                    <Button bg='beige.200' color='blue.200' fontSize='1.5rem' onClick={() => this.createNewJob()}>Cadastrar Serviço</Button>
                </Flex>
            </Flex>
        )
    }
}
