import React from 'react'
import { ProductType } from '../types/product'

type ManagerProductType = {
  data: ProductType[]
}

const ManagerProduct = (props: ManagerProductType) => {
  return (
    <div className='mt-5'>
        <table className='max-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>#</th>
                    <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
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
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct