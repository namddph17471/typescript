import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ManagerProduct from './pages/admin/products/ManagerProduct'
import ProductAdd from './pages/admin/products/ProductAdd'
import ProductUpdate from './pages/admin/products/ProductUpdate'
import DetailProduct from './pages/user/products/DetailProduct'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MangerCateProduct from './pages/admin/cateProduct/ManagerCateProduct'
import CateProductAdd from './pages/admin/cateProduct/CateProductAdd'
import CateProductEdit from './pages/admin/cateProduct/CateProductEdit'
import DetailCateProduct from './pages/DetailCateProduct'
import PrivateRouter from './components/PrivateRouter'
import MyAccount from './pages/MyAccount'
import ManagerNew from './pages/admin/news/ManagerNew'
import NewAdd from './pages/admin/news/NewAdd'
import NewEdit from './pages/admin/news/NewEdit'
import MangerCateNew from './pages/admin/cateNew/ManagerCateNew'
import CateNewAdd from './pages/admin/cateNew/CateNewAdd'
import CateNewEdit from './pages/admin/cateNew/CateNewEdit'
import News from './pages/user/news/News'
import DetailNew from './pages/user/news/DetailNew'
import ProductsPage from './pages/user/products/ProductsPage'

function App() {
  const [signin,setSignin] = useState(false)
  const handleSignin =()=> setSignin(!signin)
  return (
    <div className="App">
      <>
      <Routes>
          <Route path='/' element={<WebsiteLayout/>} >
            <Route index element={< Home  />} />
            <Route path='products' >
              <Route index element={<ProductsPage/>} />
              <Route path='page/:page'element={<ProductsPage/>} />
              <Route path=':id'element={<DetailProduct/>} />
            </Route>
            <Route path='news' >
              <Route index element={<News/>} />
              <Route path=':id'element={<DetailNew/>} />
            </Route>
            <Route path='cateProduct/:id' element={<DetailCateProduct/>} />
            <Route path='about' element={< About />} />
            <Route path='signin'  element={< Signin onSignin={handleSignin}/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='my-account/:id/updateInfo' element={<MyAccount/>}/>
          </Route>
          <Route path='admin' element={ <PrivateRouter page="admin"><AdminLayout /></PrivateRouter> }>
            <Route index element={< Navigate to="dashboard" />} />
            <Route path='dashboard' element={< Dashboard  />} />
            <Route path='products'  >
              <Route index element={< ManagerProduct  />} />
              <Route path='page/:page' element={< ManagerProduct  />} />
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
