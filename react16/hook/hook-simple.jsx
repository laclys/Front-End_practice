import React, { useEffect, useState } from 'react'

// 自定义hook

const useMousePostion = () => {
  const [postion, setPostion] = useState({x: 0, y: 0})

  function handleMove (e) {
    setPostion({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 使用useEffect处理class中生命周期可以做到的事情
  // 可以处理 componentDidMount 以及 componentDidUpdate 中的事情
  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    document.title = `(${postion.x}, ${postion.y})`
    return () => {
        window.removeEventListener('mousemove', handleMove)
    }
  }, [postion])

  return postion
}

export default function App () {
  const { x, y } = useMousePostion()
  return (
    <div>
      current position: x-{ x }, y-{ y }
    </div>
  )
}