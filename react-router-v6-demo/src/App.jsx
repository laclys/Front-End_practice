import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import A from './A'
import B from './B'
import Ba from './Ba'
import Bb from './Bb'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/A" element={<A />} />
        <Route path="/B" element={<B />}>
          <Route path="a" element={<Ba />} />
          <Route path="b" element={<Bb />} />
        </Route>
        <Route path="/" element={<Navigate to="/A" />} />
        <Route path="/B" element={<Navigate to="/B/b" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
