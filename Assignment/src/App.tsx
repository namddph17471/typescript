import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import New from './pages/New'
import About from './pages/About'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ManagerProduct from './pages/ManagerProduct'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<WebsiteLayout/>} >
            <Route index element={< Home />} />
            <Route path='products' element={< Products />} />
            <Route path='news' element={< New />} />
            <Route path='about' element={< About />} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={< Navigate to="dashboard" />} />
            <Route path='dashboard' element={< Dashboard  />} />
            <Route path='products'  >
              <Route index element={< ManagerProduct  />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
