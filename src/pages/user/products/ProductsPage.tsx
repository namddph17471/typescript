import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import Pagination from '../../../components/user/Pagination'
import ProductList from '../../../components/user/ProductList'
import { getProduct, selectProduct, selectTotalProduct } from '../../../redux/productSlice'
import { ProductType } from '../../../types/product'


const ProductsPage = () => {
  const dispatch = useDispatch()
  const totalItem = useSelector(selectTotalProduct);
  const { page } = useParams();
  const limit = 8;
  const totalPage = Math.ceil(totalItem / limit);
  let currentPage = Number(page) || 1;
  currentPage = currentPage < 1 ? 1 : currentPage > totalPage ? totalPage : currentPage;
  const start = (currentPage - 1) * limit > 0 ? (currentPage - 1) * limit : 0;
useEffect(()=>{
    dispatch(getProduct())
},[])
  return (
        <div>
            <div className="bg-white">
                <div className=" mx-auto py-10 px-14 sm:py-5 sm:px-4  lg:px-[45px]">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Danh Sách Sản Phẩm</h2>
                    <ProductList start={start} limit={limit}/>
                    <Pagination page={currentPage} totalPage={totalPage} url="products" />
                </div>
            </div>
        </div>
  )
}

export default ProductsPage