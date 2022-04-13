import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../../utils/localStorage'
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getOneUser } from '../../api/users';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/authSlice';

const Header = () => {
  const {user} =isAuthenticate();
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("user")
    toastr.success("Bạn đăng xuất thành công")
    navigate("/signin")
  }
  return (
    <div>
        <div className="relative bg-white">
          <div className=" px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-1 ">
              <nav className=" md:flex space-x-10">
                <div className="relative">
                  <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900"> Trang chủ </NavLink >
                </div>
                <NavLink to="/news" className="text-base font-medium text-gray-500 hover:text-gray-900"> Tin Tức </NavLink >
                <NavLink to="/products" className="text-base font-medium text-gray-500 hover:text-gray-900"> Sản phẩm </NavLink >
                <NavLink to="/admin/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900"> Admin</NavLink >
                <div className="relative">
                  <NavLink to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900"> Thông tin </NavLink >
                </div>
                <NavLink to="/cart" id="cart" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <img className="h-[30px] w-auto " src="https://res.cloudinary.com/namddph17471/image/upload/v1645069905/add_to_cart_cart_shopping_cart_shopping_cart_icon_icon-1320073116171330767_xybur6.png"  />
                </NavLink >
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {user && (
                <>
                <div className='mr-[5%]'>
                <button data-dropdown-toggle="dropdown" className="text-gray-500   font-medium rounded-full text-sm text-center inline-flex items-center" type="button" >
                    <li  className="list-none whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      {user?.image &&(
                      <img className="rounded-full w-[60px] h-[60px]" src={`${user?.image}`}  />
                      )}
                      {!user?.image && (
              
                      <p ><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg></p>
                      )}
                    </li>
                    <li  className="list-none whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      {user.name}
                    </li>
                  </button>
                  <div className="hidden bg-white text-base z-50 list-none divide-y w-[10%] divide-gray-100 rounded shadow my-4" id="dropdown">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li className="text-base font-medium text-gray-500 hover:text-gray-900 block px-4 py-2">
                      <Link to={user.role ? '/admin' : `/my-account/${user._id}/updateInfo`}>{user.role ?'Admin' : 'Cập nhật Thông tin'}</Link>
                      </li>
                      <li className="text-base font-medium text-gray-500 hover:text-gray-900 block px-4 py-2">
                        <button onClick={()=>handleLogout()}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </div>
                </>
              )}
              {!user &&(
                <>
                <li className="list-none whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">
                    <Link to="/signin">Đăng nhập</Link>
                </li>
                <li className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    <Link to="/signup">Đăng ký</Link>
                </li>
              </>
              )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header