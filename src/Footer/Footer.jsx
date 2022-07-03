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
  } from "@chakra-ui/react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";

export default class Footer extends Component {
  render() {
    
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
              <Link textTransform="uppercase">Sobre nós</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Contato</Link>
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
              <Link textTransform="uppercase">FAQ</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Trabalhe conosco</Link>
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
