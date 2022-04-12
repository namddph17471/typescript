import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProduct, getProductPagination, selectProduct } from '../../redux/productSlice'
import { ProductType } from '../../types/product'

type ProductListProps = {
    start:number,
    limit:number
}
const ProductList = ({start,limit}:ProductListProps) => {
    const dispatch = useDispatch()
    const product = useSelector(selectProduct)
     useEffect(()=>{
      
      dispatch(getProductPagination({start,limit}))
  },[start])
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    { product && product.map((item:ProductType,index:any) => {
       return   <div key={index} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <NavLink to={`/products/${item._id}`}>
            <img src={`${item.image}`}alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
            </NavLink >
        </div>
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <NavLink to={`/products/${item._id}`}>
                    {item.name}
                </NavLink >
            </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">{item.price}</p>
          </div>
        
    </div>
    })}
    </div>
  )
}

export default ProductList