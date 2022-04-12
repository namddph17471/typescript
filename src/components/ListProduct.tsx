import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { list } from '../api/products'
import { getProduct,  getProductPagination,  removeProduct, selectProduct } from '../redux/productSlice'
import { ProductType } from '../types/product'

type ListProductProps = {
    start:number,
    limit:number
}

const ListProduct = ({start,limit}: ListProductProps) => {
    const dispatch = useDispatch()
    const product = useSelector(selectProduct)
     useEffect(()=>{
      
      dispatch(getProductPagination({start,limit}))
  },[start])
  console.log("start",start)
    const onRemove =(id:any)=>{
        dispatch(removeProduct(id))
      }
  return (
        <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STT
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
            { product && product.map((item:ProductType,index:number)=>{
               return <tr key={index +1 }>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 " src={item.image} alt='' />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.cateProductId?.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2">
                  <button className='border font-medium text-base text-white m-2 p-2 rounded bg-red-500' onClick={()=> onRemove(item._id)} >Remove</button>
                  <Link to={`/admin/products/${item._id}/edit`} className="border font-medium text-base text-white m-2 p-2 rounded bg-indigo-600">Edit</Link>
                  </td>
                </tr>
          })}
              </tbody>
        </table>
  )
}

export default ListProduct