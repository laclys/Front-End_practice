import React, { useState, useEffect } from 'react'

function App() {
  const [show, setShow] = useState('1')
  return (
    <div className='App'>
      <Person personId={show} />
      <div>
        Show:
        <button onClick={() => setShow('1')}>Luke</button>
        <button onClick={() => setShow('2')}>C-3PO</button>
      </div>
    </div>
  )
}

const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})
  useEffect(() => {
    setLoading(true)
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data)
        setLoading(false)
      })
  }, [personId])

  if (loading === true) {
    return <p>Loading ...</p>
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  )
}

export default App