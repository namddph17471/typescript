import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProductType = {
  data: ProductType[],
  onRemove:(id:number)=>void
}

const ManagerProduct = (props: ManagerProductType) => {
  return (
    <div className='mt-5'>
      <button className='p-2 bg-indigo-600 rounded text-white text-base font-medium'>
        <Link to={`/admin/product/add`}>Add</Link>
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
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            {index + 1}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            {item.name}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            {item.price}
                          </div>
                        </td>
                        <td>
                          <button className='border font-medium text-base text-white m-2 p-2 rounded bg-red-500' onClick={()=> props.onRemove(item.id)} >Remove</button>
                          <Link to={`/admin/product/${item.id}/edit`} className="bg-indigo-600 text-white p-2 rounded ">Edit</Link>
                        </td>
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct