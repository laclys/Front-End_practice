import { useState } from 'react'
import logo from './logo.svg'
import '@/styles/App.css'
import styles from '@/styles/xxx.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hello SSR!!!
    </div>
  )
}

export default App
