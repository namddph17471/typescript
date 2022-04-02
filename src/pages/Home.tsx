import React from 'react'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/product'

type Props = {
  data: ProductType[]
}

const Home = (props: Props) => {
  return (
    <div>
      <ProductList data={props.data}/>
    </div>
  )
}

export default Home