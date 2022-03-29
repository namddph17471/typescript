import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import New from './pages/New'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<WebsiteLayout/>} />
          <Route index element={< Home />} />
          <Route path='products' element={< Products />} />
          <Route path='news' element={< New />} />
          <Route path='about' element={< About />} />
        </Routes>
    </div>
  )
}

export default App
