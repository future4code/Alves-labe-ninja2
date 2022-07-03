import React, { Component } from 'react'
import { Button, Flex, Image, Center, Box, chakra, Heading } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import { Ratings } from './Ratings'
import Devs from './Devs'
import David from './img/david-perfil.jpg'


export default class HomeScreen extends Component {

  render() {

    const CardHome = () => {

      return (
        <Flex p='20px' m='20px'>
          <Box p='20px' m='20px'>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign='center'
              color="blue.200"
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Contrate um dos nossos ninjas!
            </chakra.h2>
            <Center>
              <Image objectFit='cover' h='200px' w='450px' mb='20px' boxShadow='dark-lg' src='https://regionalseguranca.com.br/wp-content/uploads/2020/03/terceiriza%c3%a7%c3%a3o-de-servi%c3%a7os.jpg' alt='Dan Abramov' />
            </Center>
            <chakra.p
              mb={5}
              textAlign='center'
              color="blue.200"
              fontSize={{ md: "lg" }}
            >
              Temos diversos tipos de profissionais cadastrados oferecendo seus serviços. Você pode verificar com antecedência o preço e formas de pagamentos de cada profissional, assim como, seu prazo disponível para aquele serviço.
            </chakra.p>
            <Center>
              <Button _hover={{ bg: 'red.200' }} w='15rem' h='3rem' fontSize='1.4rem' color='beige.200' bg='blue.200' onClick={() => this.props.goToContracting()}>Contrate um Ninja!</Button>
            </Center>
          </Box>
          <Box p='20px' m='20px'>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign='center'
              color="blue.200"
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Se torne um dos nossos ninjas!
            </chakra.h2>
            <Center>
              <Image objectFit='cover' h='200px' w='450px' mb='20px' boxShadow='dark-lg' src='https://lmaservicos.com.br/wp-content/uploads/trabalhe-conosco-01-815x509.jpg' alt='Dan Abramov' />
            </Center>
            <chakra.p
              mb={5}
              textAlign='center'
              color="blue.200"
              fontSize={{ md: "lg" }}
            >
              Aumente sua visibilidade no mercado com a nossa vitrine online.
              Alcance milhares de possíveis clientes com a nossa plataforma que faz a intermediação profissional x cliente. Oferecemos as melhores taxas do mercado e são muitos benefícios.
            </chakra.p>
            <Center>
              <Button _hover={{ bg: 'red.200' }} w='15rem' h='3rem' fontSize='1.4rem' color='beige.200' bg='blue.200' onClick={() => this.props.goToRegistration()}>Seja um Ninja!</Button>
            </Center>
          </Box>
        </Flex>)
    }



    return (
      <Flex direction='column' alignItems='center' minH='80vh' bgGradient="linear(to-t, blue.150, beige.200)" >
        <Image src={Logo} alt='logo raposa' p="1rem" pr="3.5rem" h='50vh' w='30vw' />
        <CardHome />
        <Ratings />
        <Center mb='15px'>
        <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign='center'
              color="blue.200"
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Desenvolvido por:
            </chakra.h2>
        </Center>
        <Flex mb='2em'>
          <Devs image={David} name="David" link="https://www.linkedin.com/in/david-henrique-2a9135238/" />
          <Devs image={David} name="David" link="https://www.linkedin.com/in/david-henrique-2a9135238/" />
          <Devs image={David} name="David" link="https://www.linkedin.com/in/david-henrique-2a9135238/" />
          <Devs image={David} name="David" link="https://www.linkedin.com/in/david-henrique-2a9135238/" />
          <Devs image={David} name="David" link="https://www.linkedin.com/in/david-henrique-2a9135238/" />
        </Flex>
      </Flex>
    )
  }
}

