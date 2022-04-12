import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../../utils/localStorage'



const HeaderAdmin = () => {
  const {user} = isAuthenticate()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("user")
    toastr.success("Bạn đăng xuất thành công")
    navigate("/signin")
  }
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
             <NavLink to="/admin/products" className="text-base font-medium text-white-500 hover:text-white-900"> Product  </NavLink >
             <NavLink to="/admin/cateProduct" className="text-base font-medium text-white-500 hover:text-white-900"> CateProduct  </NavLink >
             <NavLink to="/admin/cateNew" className="text-base font-medium text-white-500 hover:text-white-900"> CateNew  </NavLink >
             <NavLink to="/admin/news" className="text-base font-medium text-white-500 hover:text-white-900"> News  </NavLink >
             <NavLink to="/admin/user" className="text-base font-medium text-white-500 hover:text-white-900"> User  </NavLink >
          </nav>
          {user && (
            <>
              <button data-dropdown-toggle="dropdown" className="text-white-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" >
                <li  className="list-none whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">
                   Hello, {user.name}
                </li>
              </button>
              <div className="hidden bg-white text-base z-50 list-none divide-y w-[10%] divide-white-100 rounded shadow my-4" id="dropdown">
                <ul className="py-1" aria-labelledby="dropdown">
                  <li className="text-base font-medium text-gray-500 hover:text-gray-900 block px-4 py-2">
                  <Link to={user.role ? '/admin' : `/my-account/${user._id}/updateInfo`}>{user.role ?'Admin' : 'Cập nhật Thông tin'}</Link>
                  </li>
                  <li className="text-base font-medium text-gray-500 hover:text-gray-900 block px-4 py-2">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    </div>
  )
}

export default HeaderAdmin