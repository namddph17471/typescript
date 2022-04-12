import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getcateNew, removecateNew } from '../redux/catenewSlice'
import { CateNewType } from '../types/cateNew'

const MangerCateNew = () => {
  const dispatch = useDispatch()
  const cateNew = useSelector(data => {
      return data.cateNew.value
  })
  useEffect(()=>{
      dispatch(getcateNew())
  },[])
  const onRemove =(id:number)=>{
    dispatch(removecateNew(id))
  }
  return (
        <div>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý Danh Mục Tin Tức
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <NavLink to={`/admin/cateNew/add`} className="sm:ml-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Thêm mới
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto py-6 ">
            <div className="px-4 py-3 sm:px-0">
              <div className=" rounded-lg ">
                <div className="flex flex-col max-w-5xl mx-auto">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                        {cateNew.map((item:CateNewType,index:number)=>{
                           return <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{index + 1}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 " src={item.image}  />
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{item.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2">
                              <button className='border font-medium text-base text-white m-2 p-2 rounded bg-red-500' onClick={()=> onRemove(item._id)} >Remove</button>
                              <Link to={`/admin/cateNew/${item._id}/edit`} className="border font-medium text-base text-white m-2 p-2 rounded bg-indigo-600">Edit</Link>
                              </td>
                            </tr>
                      })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MangerCateNew