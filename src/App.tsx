import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Products from './pages/Products'
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
import { useDispatch } from 'react-redux'
import { removeProduct } from './redux/productSlice'
import MangerCateProduct from './pages/ManagerCateProduct'
import CateProductAdd from './pages/CateProductAdd'
import CateProductEdit from './pages/CateProductEdit'
import DetailCateProduct from './pages/DetailCateProduct'
import PrivateRouter from './components/PrivateRouter'
import MyAccount from './pages/MyAccount'
import ManagerNew from './pages/ManagerNew'
import NewAdd from './pages/NewAdd'
import NewEdit from './pages/NewEdit'
import MangerCateNew from './pages/ManagerCateNew'
import CateNewAdd from './pages/CateNewAdd'
import CateNewEdit from './pages/CateNewEdit'
import News from './pages/News'
import DetailNew from './pages/DetailNew'

function App() {
  // const dispatch = useDispatch()
  // const[products,SetProduct] = useState([]);
  // useEffect(()=>{
  //   const getProducts =  async ()=>{
  //     const {data} = await list()
  //     SetProduct(data)
  //   }
  //   getProducts()
  // },[])
  // const removeItem= async (id:number)=>{
  //   // const {data} =  await remove(id);
  //   // data && SetProduct(products.filter(item => item._id !== id));
  //   dispatch(removeProduct(id))
  //   }
    // const handleAdd= async(product:ProductType)=>{
    //   const {data} = await addProduct(product);
    //   SetProduct([...products,data])
    // }
    // const handleUpdate = async(product)=>{
    //   const {data} = await update(product);
    //   SetProduct(products.map(item => item._id == data._id?data : item))
  // }
  return (
    <div className="App">
      <>
      <Routes>
          <Route path='/' element={<WebsiteLayout/>} >
            <Route index element={< Home  />} />
            <Route path='products' >
              <Route index element={<Products/>} />
              <Route path=':id'element={<DetailProduct/>} />
            </Route>
            <Route path='news' >
              <Route index element={<News/>} />
              <Route path=':id'element={<DetailNew/>} />
            </Route>
            <Route path='cateProduct/:id' element={<DetailCateProduct/>} />
            <Route path='products' element={< Products />} />
            <Route path='about' element={< About />} />
            <Route path='signin' element={<Signin/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='my-account/:id/updateInfo' element={<MyAccount/>}/>
          </Route>
          <Route path='admin' element={ <PrivateRouter><AdminLayout /></PrivateRouter> }>
            <Route index element={< Navigate to="dashboard" />} />
            <Route path='dashboard' element={< Dashboard  />} />
            <Route path='products'  >
              <Route index element={< ManagerProduct  />} />
              <Route path='add' element={< ProductAdd  />} />
              <Route path=':id/edit' element={< ProductUpdate  />} />
            </Route>
            <Route path='cateProduct'>
              <Route index element={<MangerCateProduct/>} />
              <Route path='add' element={<CateProductAdd/>} />
              <Route path=':id/edit' element={<CateProductEdit/>} />
            </Route>
            <Route path='news'  >
              <Route index element={< ManagerNew  />} />
              <Route path='add' element={< NewAdd  />} />
              <Route path=':id/edit' element={< NewEdit  />} />
            </Route>
            <Route path='cateNew'>
              <Route index element={<MangerCateNew/>} />
              <Route path='add' element={<CateNewAdd/>} />
              <Route path=':id/edit' element={<CateNewEdit/>} />
            </Route>
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
