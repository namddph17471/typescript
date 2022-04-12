import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProduct, getProductPagination, selectProduct } from '../../redux/productSlice'
import { ProductType } from '../../types/product'

type ProductNewProps = {
    limit:number,
    start:number
}

const ProductNew = ({limit,start}: ProductNewProps) => {
    const dispatch = useDispatch()
    const product = useSelector(selectProduct)
     useEffect(()=>{
      
      dispatch(getProductPagination({limit,start}))
  },[start])
  return (
    <div>
      <div className="bg-white">
        <div className=" mx-auto py-10 px-14 sm:py-5 sm:px-4  lg:px-[45px]">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Sản Phẩm Mới</h2>
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
        </div>
      </div>
    </div>
  )
}

export default ProductNew