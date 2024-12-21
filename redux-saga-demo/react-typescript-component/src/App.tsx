import React, { ReactElement } from 'react'
import Counter from './pages/Counter'
import { Router } from '@reach/router'
interface Props {
  
}

function App({}: Props): ReactElement {
  return (
    <Router>
      <Counter path='count' />
    </Router>
  )
}

export default App
