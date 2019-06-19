import React from "react"
import ReactDOM from "react-dom"
import Store, { useDataApi, initialData } from "./Store"
import buildActions from "./actions"
import DemoApp from "./App"

import "./styles.css"
function App() {
  const [state, setUrl] = useDataApi(initialData)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Store.Provider value={{ state, actions: buildActions(setUrl) }}>
        <DemoApp />
      </Store.Provider>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
