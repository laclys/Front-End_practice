import React, { useContext } from 'react'
import { AppContext } from './App'
export const Messages = () => {
  const { username } = useContext(AppContext)
  return (
    <div className="navbar">
      <p>Messages</p>
      <p>{username}</p>
    </div>
  )
}