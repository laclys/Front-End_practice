import React, { useContext } from 'react'
// import Navbar from './Navbar'
import {Messages} from './Messages'

export const AppContext = React.createContext({}) // 组件之间共享状态

function App() {
  return (
    <AppContext.Provider value={{
      username: 'Lac'
    }}>
      <div className='App'>
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  )
}

const Navbar = () => {
  const { username } = useContext(AppContext)
  return (
    <div className="navbar">
      <p>Navbar</p>
      <p>{username}</p>
    </div>
  )
}

export default App
