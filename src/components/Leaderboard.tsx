import {
  Box,
  Button,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Flex,
  Icon,
  HStack,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { FaTrophy, FaMedal, FaClock, FaCalendar } from 'react-icons/fa'

interface LeaderboardEntry {
  id: string
  name: string
  score: number
  time: number
  date: string
}

interface LeaderboardProps {
  entries: LeaderboardEntry[]
  onRestart: () => void
}

const Leaderboard = ({ entries, onRestart }: LeaderboardProps) => {
  const sortedEntries = [...entries].sort((a, b) => b.score - a.score)
  const bgColor = useColorModeValue('purple.80', 'gray.800')
  const bgGradient = useColorModeValue(
    'linear(to-br, purple.50, blue.50)',
    'linear(to-br, purple.900, blue.900)'
  )

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0: return 'yellow.500'
      case 1: return 'gray.400'
      case 2: return 'orange.500'
      default: return 'purple.500'
    }
  }

  return (
    <Flex align="center" justify="center" minH="80vh">
      <Box
        p={8}
        bg={bgColor}
        borderRadius="2xl"
        boxShadow="2xl"
        w="100%"
        position="relative"
        overflow="hidden"
        maxW="800px"
        mx="auto"
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

        <VStack spacing={8} position="relative" zIndex={1}>
          <HStack spacing={4}>
            <Icon as={FaTrophy} w={8} h={8} color="yellow.500" />
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, purple.600, blue.600)"
              bgClip="text"
            >
              Leaderboard
            </Heading>
          </HStack>

          {entries.length === 0 ? (
            <Box 
              textAlign="center" 
              py={10}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="lg"
            >
              <Icon as={FaTrophy} w={16} h={16} color="gray.300" mb={4} />
              <Text color="gray.500" fontSize="xl">
                No scores yet. Be the first to play!
              </Text>
            </Box>
          ) : (
            <Box 
              w="100%" 
              overflowX="auto"
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              p={4}
            >
              <Table variant="simple" size="lg">
                <Thead>
                  <Tr>
                    <Th color="purple.600">Rank</Th>
                    <Th color="purple.600">Name</Th>
                    <Th isNumeric color="purple.600">Score</Th>
                    <Th isNumeric color="purple.600">Time</Th>
                    <Th color="purple.600">Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {sortedEntries.map((entry, index) => (
                    <Tr
                      key={entry.id}
                      _hover={{
                        bg: 'purple.50',
                        transform: 'translateX(4px)',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Td>
                        <HStack spacing={2}>
                          <Icon
                            as={FaMedal}
                            color={getMedalColor(index)}
                            w={5}
                            h={5}
                          />
                          <Text fontWeight="bold" color="purple.700">#{index + 1}</Text>
                        </HStack>
                      </Td>
                      <Td>
                        <Text fontWeight="bold" color="purple.700">{entry.name}</Text>
                      </Td>
                      <Td isNumeric>
                        <Badge 
                          colorScheme="purple" 
                          fontSize="md" 
                          px={3} 
                          py={1}
                          borderRadius="xl"
                          bg="purple.100"
                          color="purple.700"
                        >
                          {entry.score}
                        </Badge>
                      </Td>
                      <Td isNumeric>
                        <HStack spacing={1}>
                          <Icon as={FaClock} color="blue.500" />
                          <Text color="purple.700">{entry.time}s</Text>
                        </HStack>
                      </Td>
                      <Td>
                        <HStack spacing={1}>
                          <Icon as={FaCalendar} color="blue.500" />
                          <Text color="purple.700">{entry.date}</Text>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}

          <Button
            bgGradient="linear(to-r, purple.500, blue.500)"
            color="white"
            size="lg"
            onClick={onRestart}
            mt={4}
            h="60px"
            fontSize="xl"
            boxShadow="lg"
            borderRadius="xl"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'xl',
              bgGradient: 'linear(to-r, purple.600, blue.600)',
              transition: 'all 0.2s'
            }}
            _active={{
              transform: 'translateY(0)',
              boxShadow: 'md'
            }}
          >
            Play Again
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

export default Leaderboard 