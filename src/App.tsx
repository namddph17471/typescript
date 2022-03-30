import { useEffect, useState } from 'react'
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
import { ProductType } from './types/product'
import { addProduct, list, remove, update } from './api/products'
import ProductAdd from './pages/ProductAdd'
import ProductUpdate from './pages/ProductUpdate'

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
    data && SetProduct(products.filter(item => item._id !== id));
  
    }
    const handleAdd= async(product:ProductType)=>{
      const {data} = await addProduct(product);
      SetProduct([...products,data])
    }
    const handleUpdate = async(product:ProductType)=>{
      console.log(product);
      const {data} = await update(product);
      console.log(data);
      SetProduct(products.map(item => item._id == data._id?data : item))
  }
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
              <Route index element={< ManagerProduct onRemove={removeItem} data={products} />} />
              <Route path='add' element={< ProductAdd onAdd={handleAdd} />} />
              <Route path=':id/edit' element={< ProductUpdate onUpdate={handleUpdate} />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
