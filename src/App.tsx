import { ChakraProvider } from '@chakra-ui/react'
import Quiz from './components/Quiz'
import theme from './theme'
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Quiz />
    </ChakraProvider>
  )
}

export default App
