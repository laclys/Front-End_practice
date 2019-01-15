/**
 * 必须要react和react-dom 16.7以上
 */

import React, { useState, useEffect } from 'react'

export default () => {
  const [name, setName] = useState('jokcy')

  useEffect(() => {
    console.log('component update')

    return () => {
      console.log('unbind')
    }
  }, [])

  return (
    <>
      <p>My Name is: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}
