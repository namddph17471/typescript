import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getcateProduct } from '../redux/cateproductSlice'


const CateProductList = () => {
    const dispatch = useDispatch()
    const cateProduct = useSelector(data => {
    return data.cateProduct.value
    })
    useEffect(()=>{
    dispatch(getcateProduct())
    },[])
    
  return (
    <div className="bg-white">
        <div className=" mx-auto py-10 px-14 sm:py-5 sm:px-4  lg:px-[45px]">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Danh mục</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cateProduct && cateProduct.map(item => {
               return   <div key={item.name} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <NavLink to={`/cateProduct/${item._id}`}>
                    <img src="https://res.cloudinary.com/namddph17471/image/upload/v1645504398/zipsokryajrhits9lmpf.jpg" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                    </NavLink >
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <NavLink to={`/cateProduct/${item._id}`}>
                            {item.name}
                        </NavLink >
                    </h3>
                    </div>
                </div>
            </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default CateProductList