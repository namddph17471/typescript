import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const HeaderAdmin = (props: Props) => {
  return (
    <div>
      <div className="relative bg-[#212529] text-white mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
             <NavLink to="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src=""   />
             </NavLink >
          </div>
          <nav className="hidden md:flex space-x-10">
             <NavLink to="/" className="text-base font-medium text-white-500 hover:text-white-900"> Home  </NavLink >
             <NavLink to="/admin/product" className="text-base font-medium text-white-500 hover:text-white-900"> Product  </NavLink >
             <NavLink to="/admin/new" className="text-base font-medium text-white-500 hover:text-white-900"> News  </NavLink >
             <NavLink to="/admin/user" className="text-base font-medium text-white-500 hover:text-white-900"> User  </NavLink >
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
             <NavLink to="#" className="whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900"> Sign in  </NavLink >
             <NavLink to="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up  </NavLink >
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HeaderAdmin