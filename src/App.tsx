import { ChakraProvider, Box, Container, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Quiz from './components/Quiz'
import Leaderboard from './components/Leaderboard'
import Welcome from './components/Welcome'

// Sample questions data
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    timeLimit: 30
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    timeLimit: 30
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1,
    timeLimit: 30
  },
  {
    id: 4,
    question: "Which programming language was created by Brendan Eich?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
    timeLimit: 30
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: 2,
    timeLimit: 30
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    timeLimit: 30
  },
  {
    id: 7,
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
    correctAnswer: 1,
    timeLimit: 30
  },
  {
    id: 8,
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    correctAnswer: 1,
    timeLimit: 30
  },
  {
    id: 9,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Skin"],
    correctAnswer: 3,
    timeLimit: 30
  },
  {
    id: 10,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Ernest Hemingway", "Harper Lee", "Mark Twain", "F. Scott Fitzgerald"],
    correctAnswer: 1,
    timeLimit: 30
  }
]

function App() {
  const [gameState, setGameState] = useState<'welcome' | 'quiz' | 'leaderboard'>('welcome')
  const [leaderboard, setLeaderboard] = useState<Array<{
    id: string,
    name: string,
    score: number,
    time: number,
    date: string
  }>>([])
  const [playerName, setPlayerName] = useState('')

  const handleQuizFinish = (score: number, time: number) => {
    const newEntry = {
      id: Date.now().toString(),
      name: playerName,
      score,
      time,
      date: new Date().toLocaleDateString()
    }
    setLeaderboard(prev => [...prev, newEntry].sort((a, b) => b.score - a.score))
    setGameState('leaderboard')
  }

  const startQuiz = (name: string) => {
    setPlayerName(name)
    setGameState('quiz')
  }

  const restartQuiz = () => {
    setGameState('welcome')
  }

  return (
    <ChakraProvider>
      <Flex 
        minH="100vh" 
        bgGradient="linear(to-br, blue.50, purple.50)"
        align="center" 
        justify="center"
        py={10}
      >
        <Container maxW="container.md">
          {gameState === 'welcome' && (
            <Welcome onStart={startQuiz} />
          )}
          {gameState === 'quiz' && (
            <Quiz 
              questions={questions}
              onFinish={handleQuizFinish}
            />
          )}
          {gameState === 'leaderboard' && (
            <Leaderboard 
              entries={leaderboard}
              onRestart={restartQuiz}
            />
          )}
        </Container>
      </Flex>
    </ChakraProvider>
  )
}

export default App
