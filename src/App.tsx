import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product'
import axios from 'axios'
import { addProduct, list, remove, update } from './api/products'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ManagerProduct from './pages/ManagerProduct'
import News from './pages/News'
import About from './pages/About'
import ProductAdd from './pages/ProductAdd'
import ProductUpdate from './pages/ProductUpdate'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PrivateRouter from './components/PrivateRouter'

function App() {

  const[products,SetProduct] = useState<ProductType[]>([]);
  useEffect(()=>{
    const getProducts =  async ()=>{
      const {data} = await list()
      SetProduct(data)
    }
    getProducts()
  },[])
  const removeItem= async (id:number)=>{
  const {data} =  await remove(id);
  data && SetProduct(products.filter(item => item.id !== id));

  }
  const handleAdd= async(product:ProductType)=>{
    const {data} = await addProduct(product);
    SetProduct([...products,data])
  }
  const handleUpdate = async(product:ProductType)=>{
      console.log(product);
      const {data} = await update(product);
      console.log(data);
      SetProduct(products.map(item => item.id == data.id?data : item))
  }
  return (
    <div className="App">
    <main>
      <>
      <Routes>
        <Route path='/' element={< WebsiteLayout />}>
          <Route index element={< Home />} />
          <Route path='products' element={< Product />} />
          <Route path='news' element={< News />} />
          <Route path='about' element={< About />} />
          <Route path='signin' element={< Signin />} />
          <Route path='signup' element={< Signup  />} />
        </Route>
        <Route path='admin' element={<PrivateRouter> < AdminLayout />  </PrivateRouter >}>
          <Route index element={< Navigate to="dashboard" />} />
          <Route path='dashboard' element={< Dashboard  />} />
          <Route path='product'  >
            <Route index element={< ManagerProduct onRemove={removeItem} data={products} />} />
            <Route path='add' element={< ProductAdd onAdd={handleAdd} />} />
            <Route path=':id/edit' element={< ProductUpdate onUpdate={handleUpdate} />} />
          </Route>
        </Route>
        
      </Routes>
      </>
    </main>
    </div>
  )
}

export default App
