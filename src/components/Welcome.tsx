import { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
  useToast,
  Container,
  Image,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaTrophy, FaBrain, FaClock } from 'react-icons/fa'

interface WelcomeProps {
  onStart: (name: string) => void
}

const Welcome = ({ onStart }: WelcomeProps) => {
  const [name, setName] = useState('')
  const toast = useToast()
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50)',
    'linear(to-br, blue.900, purple.900)'
  )

  const handleStart = () => {
    if (name.trim().length < 2) {
      toast({
        title: 'Invalid Name',
        description: 'Please enter a valid name (at least 2 characters)',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    onStart(name.trim())
  }

  return (
    <Flex align="center" justify="center" minH="80vh">
      <Box
        p={12}
        bg="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(20px)"
        borderRadius="24px"
        w="100%"
        textAlign="center"
        position="relative"
        overflow="hidden"
        maxW="800px"
        mx="auto"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease"
        _hover={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12)",
          transform: "translateY(-2px)"
        }}
      >
        <VStack spacing={10} position="relative" zIndex={1}>
          <Heading 
            size="2xl" 
            color="#6B46C1"
            fontWeight="bold"
            bgGradient="linear(to-r, #6B46C1, #805AD5)"
            bgClip="text"
            letterSpacing="-1px"
          >
            Welcome to QuizMaster!
          </Heading>
          
          <Text 
            fontSize="xl" 
            color="gray.600" 
            maxW="600px"
            lineHeight="1.6"
          >
            Test your knowledge and compete for the top spot on our leaderboard!
          </Text>

          <Flex gap={6} justify="center" wrap="wrap">
            <Box 
              textAlign="center"
              p={8}
              borderRadius="24px"
              bg="rgba(255, 255, 255, 0.9)"
              backdropFilter="blur(8px)"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
              minW="180px"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "24px",
                padding: "2px",
                background: "linear-gradient(45deg, rgba(214, 158, 46, 0.3), rgba(107, 70, 193, 0.3))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude"
              }}
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Icon 
                as={FaTrophy} 
                w={12} 
                h={12} 
                color="#D69E2E" 
                mb={4}
                transition="all 0.4s ease"
                _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
              />
              <Text fontWeight="bold" color="#553C9A" mb={2} fontSize="lg">Compete</Text>
              <Text fontSize="sm" color="gray.600">Win prizes</Text>
            </Box>
            <Box 
              textAlign="center"
              p={8}
              borderRadius="24px"
              bg="rgba(255, 255, 255, 0.9)"
              backdropFilter="blur(8px)"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
              minW="180px"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "24px",
                padding: "2px",
                background: "linear-gradient(45deg, rgba(128, 90, 213, 0.3), rgba(66, 153, 225, 0.3))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude"
              }}
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Icon 
                as={FaBrain} 
                w={12} 
                h={12} 
                color="#805AD5" 
                mb={4}
                transition="all 0.4s ease"
                _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
              />
              <Text fontWeight="bold" color="#553C9A" mb={2} fontSize="lg">Learn</Text>
              <Text fontSize="sm" color="gray.600">Expand knowledge</Text>
            </Box>
            <Box 
              textAlign="center"
              p={8}
              borderRadius="24px"
              bg="rgba(255, 255, 255, 0.9)"
              backdropFilter="blur(8px)"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
              minW="180px"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "24px",
                padding: "2px",
                background: "linear-gradient(45deg, rgba(66, 153, 225, 0.3), rgba(107, 70, 193, 0.3))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude"
              }}
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Icon 
                as={FaClock} 
                w={12} 
                h={12} 
                color="#4299E1" 
                mb={4}
                transition="all 0.4s ease"
                _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
              />
              <Text fontWeight="bold" color="#553C9A" mb={2} fontSize="lg">Quick</Text>
              <Text fontSize="sm" color="gray.600">30s per question</Text>
            </Box>
          </Flex>

          <Box w="100%" maxW="400px" mt={4}>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="lg"
              height="60px"
              bg="white"
              border="2px solid transparent"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
              _hover={{ 
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.08)",
                borderColor: "purple.100"
              }}
              _focus={{ 
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.08)",
                borderColor: "purple.300",
                bg: "white"
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleStart()}
              borderRadius="20px"
              fontSize="lg"
              transition="all 0.3s ease"
              pl={6}
            />
          </Box>

          <Button
            bgGradient="linear(45deg, #805AD5, #4299E1)"
            color="white"
            size="lg"
            onClick={handleStart}
            w="200px"
            h="60px"
            fontSize="lg"
            fontWeight="bold"
            backdropFilter="blur(8px)"
            boxShadow="0 4px 20px rgba(128, 90, 213, 0.2)"
            borderRadius="24px"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "24px",
              padding: "2px",
              background: "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude"
            }}
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 12px 24px rgba(128, 90, 213, 0.3)",
              bgGradient: "linear(45deg, #6B46C1, #3182CE)"
            }}
            _active={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 16px rgba(128, 90, 213, 0.2)",
              bgGradient: "linear(45deg, #553C9A, #2C5282)"
            }}
            mt={6}
          >
            Start Quiz
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

export default Welcome 