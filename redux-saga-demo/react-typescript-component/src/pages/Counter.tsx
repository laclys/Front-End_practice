import React, { useState, FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import Button from '../components/Button'

const Counter: FC<RouteComponentProps> = () => {
  const [count, setCount] = useState<number>(0)

  const handleBtnClick =  () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={handleBtnClick} >+</Button>
    </div>
  )
}

export default Counter
