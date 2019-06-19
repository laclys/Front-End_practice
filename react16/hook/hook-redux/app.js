import React, { useContext, useEffect } from "react"
import Store from "./Store"

export default function App() {
  const { state, actions } = useContext(Store);
  function handleFetchInfo() {
    actions.fetchInfo()
  }
  useEffect(() => {
    if (!state.isLoading) {
      console.log(state.data)
    }
  }, [state])
  return (
    <div onClick={handleFetchInfo}>
      123
      <span>{JSON.stringify(state.data)}</span>
    </div>
  )
}
