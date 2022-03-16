import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product'
import axios from 'axios'
import { list, remove } from './api/products'
import { NavLink, Route, Routes } from 'react-router-dom'

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
      
    <header>
      <ul>
        <li><NavLink to="/">Home Page</NavLink></li>
        <li><NavLink to="/products">Product Page</NavLink></li>
        <li><NavLink to="/about">About Page</NavLink></li>
      </ul>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1> }></Route>
        <Route path='products' element={<h1>Product Page</h1> }></Route>
        <Route path='about' element={<h1>About Page</h1> }></Route>
      </Routes>
    </main>
    </div>
  )
}

export default App
