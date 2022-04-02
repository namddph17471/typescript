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
import ProductList from './components/ProductList'
import DetailProduct from './pages/DetailProduct'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

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
      const {data} = await update(product);
      SetProduct(products.map(item => item._id == data._id?data : item))
  }
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<WebsiteLayout/>} >
            <Route index element={< Home data={products} />} />
            <Route path='products' >
              <Route index element={<Products/>} />
              <Route path=':id'element={<DetailProduct/>} />
            </Route>
            <Route path='products' element={< Products />} />
            <Route path='news' element={< New />} />
            <Route path='about' element={< About />} />
            <Route path='signin' element={<Signin/>} />
            <Route path='signup' element={<Signup/>} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={< Navigate to="dashboard" />} />
            <Route path='dashboard' element={< Dashboard  />} />
            <Route path='products'  >
              <Route index element={< ManagerProduct onRemove={removeItem} data={products} />} />
              <Route path='add' element={< ProductAdd  />} />
              <Route path=':id/edit' element={< ProductUpdate onUpdate={handleUpdate} />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
