import React, { Component } from 'react'
import {
    Box,
    Flex,
    HStack,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
    Button
  } from "@chakra-ui/react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';

export default class Footer extends Component {
  render() {

    const AboutUs = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button textTransform="uppercase" color='beige.200'variant='link' onClick={onOpen}>Sobre nós</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent  bg='beige.200'>
                <ModalHeader>Sobre nós</ModalHeader>
                <ModalBody>
                  <Text>Somos uma startup de tecnologia com o objetivo de criar uma ponte entre profissionais qualificados com o cliente final. Centenas de profissionais já estão registrados em nossa plataforma e o cliente escolhe qual serviço deseja de forma prática e rápida.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button _hover={{bg:'red.200'}} color='beige.200' bg='blue.200' onClick={onClose}>Fechar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

      const Contact = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button textTransform="uppercase" color='beige.200'variant='link' onClick={onOpen} >Contato</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent  bg='beige.200'>
                <ModalHeader>Atendimento</ModalHeader>
                <ModalBody>
                  <Text>Nosso atendimento está dispónivel das 9h às 18h através das nossas redes sociais ou:</Text>
                  <Text mt='5px'>Tel: +00 (00) 0000-0000</Text>
                  <Text mt='5px'>E-mail: sac@foxninjas.com</Text>
                </ModalBody>
                <ModalFooter>
                  <Button _hover={{bg:'red.200'}} color='beige.200' bg='blue.200' onClick={onClose}>Fechar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

      const Faq = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button textTransform="uppercase" color='beige.200'variant='link' onClick={onOpen}>Faq</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent  bg='beige.200'>
                <ModalHeader>FAQ</ModalHeader>
                <ModalBody>
                  <Text fontSize='2xl'>P: Tenho alguma garantia do serviço?</Text>
                  <Text>R: A garantia é oferecida pelo profissional, portanto, vária entre cada um.</Text>
                  <Text fontSize='2xl'>P: Quanto custa?</Text>
                  <Text>R: Não cobramos nada pra o cliente, o valor do serviço é acordado entre o cliente e o profissional.</Text>
                  <Text fontSize='2xl'>P: Não gostei do serviço, e agora?</Text>
                  <Text>R: Entre em contato conosco caso o profissional contratado tenha faltado com profissionalismo.</Text>
                  <Text fontSize='2xl'>P: Tenho mais dúvidas, com quem falo?</Text>
                  <Text>R: Entre em contato conosco, teremos muito prazer em conversar com você 🥰</Text>
                </ModalBody>
                <ModalFooter>
                  <Button _hover={{bg:'red.200'}} color='beige.200' bg='blue.200' onClick={onClose}>Fechar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

      const WorkWhithUs = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button textTransform="uppercase" color='beige.200'variant='link' onClick={onOpen} >Trabalhe conosco</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent  bg='beige.200'>
                <ModalHeader>Carreira</ModalHeader>
                <ModalBody>
                  <Text>Teremos o maior prazer de ter você trabalhando conosco. Estamos sempre precisando de pessoas com sede de conhecimento e apaixonadas por tecnologia.</Text>
                  <Text mt='5px'>Mande seu currículo para: recrutamento@foxninjas.com</Text>
                </ModalBody>
                <ModalFooter>
                  <Button _hover={{bg:'red.200'}} color='beige.200' bg='blue.200' onClick={onClose}>Fechar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
    
    return (
        <Box
        bgGradient="linear(to-t, black, blue.150)"
      >
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          h="3.5px"
        />
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          w="full"
          justify="space-between"
          p={10}
        >
          
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color='beige.200'
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <AboutUs/>
            </Flex>
            <Flex justify="start" direction="column">
              <Contact/>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color='beige.200'
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Faq/>
            </Flex>
            <Flex justify="start" direction="column">
              <WorkWhithUs/>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color='beige.200'
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color='beige.200'
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
              color='beige.200'
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                color='beige.200'
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack>
      
          <Text
            textAlign="center"
            fontSize="smaller"
            color='white'
          >
            &copy;Copyright. Todos os direitos reservados.
          </Text>
        </VStack>
      </Box>
    )
  }
}
