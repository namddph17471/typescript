import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product'
import axios from 'axios'
import { list, remove } from './api/products'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ManagerProduct from './pages/ManagerProduct'
import News from './pages/News'
import About from './pages/About'

function App() {

  const[product,SetProduct] = useState<ProductType[]>([]);
  useEffect(()=>{
    const getProducts =  async ()=>{
      const {data} = await list()
      SetProduct(data)
    }
    getProducts()
  },[])
  const removeItem= async (id:number)=>{
  const {data} =  await remove(id);
  data && SetProduct(product.filter(item => item.id !== id));

  }
  return (
    <div className="App">
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
        </tbody>
      </table> */}
      
    {/* <header>
      <ul>
        <li><NavLink to="/">Home Page</NavLink></li>
        <li><NavLink to="/products">Product Page</NavLink></li>
        <li><NavLink to="/about">About Page</NavLink></li>
      </ul>
    </header> */}
    <main>
      <Routes>
        <Route path='/' element={< WebsiteLayout />}>
          <Route index element={< Home />} />
          <Route path='products' element={< Product />} />
          <Route path='news' element={< News />} />
          <Route path='about' element={< About />} />
        </Route>
        <Route path='admin' element={< AdminLayout /> }>
          <Route index element={< Navigate to="dashboard" />} />
          <Route path='dashboard' element={< Dashboard  />} />
          <Route path='product' element={< ManagerProduct  />} />
        </Route>
      </Routes>
    </main>
    </div>
  )
}

export default App
