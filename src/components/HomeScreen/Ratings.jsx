import { Badge, Box, chakra, Flex, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import TrabalhadorUm from './img/um.jpg'
import TrabalhadorDois from './img/dois.jpg'
import TrabalhadorTres from './img/tres.jpg'
import TrabalhadorQuatro from './img/quatro.jpg'
import TrabalhadorCinco from './img/cinco.jpg'

export const Ratings = () => {

  return (
    
    <Flex
      p={50}
      m='20px'
      mt='-30px'
      alignItems="center"
      justifyContent="center"
      direction='column'
    >
        <chakra.h2
              mb='30px'
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              textAlign='center'
              color="blue.200"
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Destaques do mês!
            </chakra.h2>
        <Flex direction='row'>
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        m='1'
      >
        <Image
          src={TrabalhadorUm}
          alt='Trabalhador' h='55%' w='100%'
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Destaque
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Contador
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            João De Jesus
          </Text>

          <Box>
            R$ 200,00
            <Box as="span" color="gray.600" fontSize="sm">
              / serviço
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              30 avaliações
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        m='1'
      >
        <Image
          src={TrabalhadorDois}
          alt='Trabalhador' h='55%' w='100%'
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Destaque
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Enfermeiro
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Enzo Valentino
          </Text>

          <Box>
            R$ 300,00
            <Box as="span" color="gray.600" fontSize="sm">
              / diária
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              18 avaliações
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        m='1'
      >
        <Image
          src={TrabalhadorTres}
          alt='Trabalhador' h='55%' w='100%'
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Destaque
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Dubladora
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Carla Abdul
          </Text>

          <Box>
            R$ 50,00
            <Box as="span" color="gray.600" fontSize="sm">
              / texto
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              96 avaliações
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        m='1'
      >
        <Image
          src={TrabalhadorQuatro}
          alt='Trabalhador' h='55%' w='100%'
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Destaque
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Advogada
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Maria Silveira
          </Text>

          <Box>
            R$ 150,00
            <Box as="span" color="gray.600" fontSize="sm">
              / consulta
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              41 avaliações
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        m='1'
      >
        <Image
          src={TrabalhadorCinco}
          alt='Trabalhador' h='55%' w='100%'
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Destaque
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Psicóloga
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Gabriela Amaral 
          </Text>

          <Box>
            R$ 120,00
            <Box as="span" color="gray.600" fontSize="sm">
              / hora
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              72 avaliações
            </Box>
          </Box>
        </Box>
      </Box>

    </Flex>
    </Flex>
  )
}

