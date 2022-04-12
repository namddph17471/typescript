import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { getProduct, removeProduct, selectProduct, selectTotalProduct } from '../../../redux/productSlice'
import { ProductType } from '../../../types/product'
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ListProduct from '../../../components/ListProduct'
import Pagination from '../../../components/Pagination'
import { list } from '../../../api/products'

const ManagerProduct = () => {
    const dispatch = useDispatch()
    const totalItem = useSelector(selectTotalProduct);
    const { page } = useParams();
    const limit = 5;
    const totalPage = Math.ceil(totalItem / limit);
    let currentPage = Number(page) || 1;
    currentPage = currentPage < 1 ? 1 : currentPage > totalPage ? totalPage : currentPage;
    const start = (currentPage - 1) * limit > 0 ? (currentPage - 1) * limit : 0;
  useEffect(()=>{
      dispatch(getProduct())
  },[])
  return (
        <div>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý Sản Phẩm
                  </h2>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <NavLink to={`/admin/products/add`} className="sm:ml-3">
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
                        <ListProduct start={start} limit={limit} />
                        <Pagination page={currentPage} totalPage={totalPage} url="products" />
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

export default ManagerProduct