import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProductType = {

}

const ManagerProduct = (props: ManagerProductType) => {
  return (
    <div className='mt-5'>
      <button className='p-2 bg-indigo-600 rounded text-white text-base font-medium'>
        <Link to={`/admin/products/add`}>Add</Link>
      </button>
        <table className='max-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>#</th>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
            
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct