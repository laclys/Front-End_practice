import React from 'react'
import { render } from 'react-dom'
import MyComp from '@/index'

const App = () => <div>hello Lac!<MyComp /></div>
render(<App />, document.getElementById('root'))
