import React from 'react'
import CateProductList from '../components/CateProductList'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/product'



const Home = () => {
  return (
    <div>
      <div>
        <CateProductList/>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  )
}

export default Home