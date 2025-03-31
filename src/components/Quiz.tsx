import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  VStack,
  Text,
  Progress,
  Grid,
  Heading,
  useToast,
  Flex,
  HStack,
  Icon,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaClock, FaTrophy, FaQuestionCircle } from 'react-icons/fa'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  timeLimit: number
}

interface QuizProps {
  questions: Question[]
  onFinish: (score: number, time: number) => void
}

const Quiz = ({ questions, onFinish }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(questions[0].timeLimit)
  const [totalTime, setTotalTime] = useState(0)
  const toast = useToast()
  const bgGradient = useColorModeValue(
    'linear(to-br, purple.50, blue.50)',
    'linear(to-br, purple.900, blue.900)'
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleNextQuestion()
          return questions[currentQuestionIndex + 1]?.timeLimit || 0
        }
        return prev - 1
      })
      setTotalTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex])

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    if (isCorrect) {
      const timeBonus = Math.floor(timeRemaining / 2)
      const questionScore = 100 + timeBonus
      setScore((prev) => prev + questionScore)
      toast({
        title: 'Correct! 🎉',
        description: `+${questionScore} points (including ${timeBonus} time bonus)`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Incorrect 😢',
        description: 'No points awarded',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }

    handleNextQuestion()
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setTimeRemaining(questions[currentQuestionIndex + 1].timeLimit)
    } else {
      onFinish(score, totalTime)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <Flex 
      minH="100vh" 
      w="100%" 
      bg="gray.50"
      py={8}
    >
      <Box
        w="full"
        maxW="4xl"
        mx="auto"
        bg="purple.80"
        borderRadius="2xl"
        boxShadow="2xl"
        overflow="hidden"
        position="relative"
      >
        {/* Background decoration */}
        <Box
          position="absolute"
          top="-50%"
          left="-50%"
          w="200%"
          h="200%"
          bgGradient={bgGradient}
          transform="rotate(-12deg)"
          zIndex={0}
          opacity={0.5}
        />

        <VStack spacing={8} position="relative" zIndex={1} p={8} align="stretch">
          <HStack justify="space-between" w="100%" mb={4}>
            <Badge 
              colorScheme="purple" 
              fontSize="md" 
              px={4} 
              py={2}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
            >
              Question {currentQuestionIndex + 1} of {questions.length}
            </Badge>
            <HStack
              bg="white"
              px={4}
              py={2}
              borderRadius="xl"
              boxShadow="md"
            >
              <Icon as={FaTrophy} color="yellow.500" />
              <Text fontSize="xl" fontWeight="bold" bgGradient="linear(to-r, purple.600, blue.600)" bgClip="text">
                Score: {score}
              </Text>
            </HStack>
          </HStack>

          <Box w="100%">
            <Progress
              value={(timeRemaining / currentQuestion.timeLimit) * 100}
              w="100%"
              colorScheme="purple"
              hasStripe
              isAnimated
              size="lg"
              borderRadius="full"
              bg="white"
            />
          </Box>

          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            w="100%"
            textAlign="center"
            position="relative"
            boxShadow="lg"
          >
            <Icon
              as={FaQuestionCircle}
              position="absolute"
              top={-4}
              left={-4}
              w={8}
              h={8}
              color="purple.500"
              bg="white"
              p={2}
              borderRadius="full"
              boxShadow="md"
            />
            <Heading 
              size="lg" 
              bgGradient="linear(to-r, purple.700, blue.700)"
              bgClip="text"
              px={4}
            >
              {currentQuestion.question}
            </Heading>
          </Box>

          <Grid
            templateColumns={['1fr', null, '1fr 1fr']}
            gap={6}
            w="100%"
          >
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                size="lg"
                bg="white"
                color="purple.700"
                onClick={() => handleAnswer(index)}
                h="80px"
                fontSize="lg"
                borderRadius="xl"
                borderWidth={2}
                borderColor="purple.200"
                boxShadow="md"
                _hover={{
                  bg: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                  borderColor: 'purple.400',
                  transition: 'all 0.2s'
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'md'
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                whiteSpace="normal"
                textAlign="center"
                p={4}
              >
                {option}
              </Button>
            ))}
          </Grid>

          <Flex justify="center">
            <HStack 
              spacing={2} 
              bg="white"
              px={6}
              py={3}
              borderRadius="xl"
              boxShadow="md"
            >
              <Icon as={FaClock} color="blue.500" />
              <Text fontSize="xl" fontWeight="bold" color="purple.700">
                Time Remaining: {timeRemaining}s
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  )
}

export default Quiz 