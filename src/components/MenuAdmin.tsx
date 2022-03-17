import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuAdmin = () => {
  return (
    <div>
         <div className=" p-3 text-white bg-[#212529] w-[280px] h-full mr-[20px]" >
            <NavLink to="/" className=" mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Logo</span>
            </NavLink>
            <ul className="nav nav-pills flex-column mb-auto grid grid-flow-row auto-rows-max">
                <li className="mb-4">
                <NavLink to="/" className="nav-link active" aria-current="page">
                    Home
                </NavLink>
                </li>
                <li className="mb-4">
                <NavLink to="/admin/dashboard" className="nav-link text-white">
                    Dashboard
                </NavLink>
                </li >
                <li className="mb-4">
                <NavLink to="/admin/product" className="nav-link text-white">
                    Product
                </NavLink>
                </li>
                <li className="mb-4">
                <NavLink to="/admin/news" className="nav-link text-white">
                    News
                </NavLink>
                </li>
                <li className="mb-4">
                <NavLink to="/admin/users" className="nav-link text-white">
                    User
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuAdmin