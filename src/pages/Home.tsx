import React from 'react'
import CateProductList from '../components/user/CateProductList'
import ProductNew from '../components/user/ProductNew'



const Home = () => {
  return (
    <div>
      <div>
        <CateProductList/>
      </div>
      <div>
        <ProductNew limit={4} start={0} />
      </div>
    </div>
  )
}

export default Home