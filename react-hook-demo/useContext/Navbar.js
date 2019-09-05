import React, { useContext } from 'react'

const AppContext = React.createContext({})

function Navbar() {
    const { username } = useContext(AppContext)
    console.log('12', useContext(AppContext))
  return (
    <div>
      Navbar
      username:{username}
    </div>
  )
}

export default Navbar