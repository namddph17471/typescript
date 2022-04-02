import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/products'
import { ProductType } from '../types/product'

type Props = {}

const DetailProduct = (props: Props) => {
  const [products,setProduct] = useState<ProductType>()
  const _id = useParams().id
  useEffect(()=>{
    const getProduct = async ()=>{
      const {data} = await read(_id)
      setProduct(data)
    }
    getProduct()
  },[])
  return (
    <div>
      DetailProduct
      <h3>
        {products?.name}
      </h3>
      <p>
        {products?.price}
      </p>
    </div>
    
  )
}

export default DetailProduct