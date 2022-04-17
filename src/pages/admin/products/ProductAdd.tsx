import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { ProductType } from "../../../types/product";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/productSlice";
import { useEffect, useState } from "react";
import { getcateProduct, selectCateProduct } from "../../../redux/cateproductSlice";
import { CateProductType } from "../../../types/cateProduct";
import { uploadFile } from "../../../utils";

type FormInput = {
    _id:any,
    name:string,
    price:number,
    desc:string,
    image:string,
    cateProductId:any
}
const ProductAdd = ( )=> {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const navigate = useNavigate()
    const cateProduct= useSelector(selectCateProduct)
    useEffect(()=>{
        dispatch(getcateProduct())
    },[])
    const onSubmit:SubmitHandler<FormInput>  = async (data)=>{
        try {
            const url= await uploadFile(data.image[0]);
            data.image = url,
            dispatch(createProduct(data))
            toastr.success("Thêm sản phẩm thành công")
            navigate('/admin/products');
        } catch (error:any) {
            toastr.error(error.response.data.message)
        }
        
    }
  return (
    <div className="">
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Thêm mới Sản phẩm
                </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <form  id="form-add-product" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Tên
                            </label>
                            <div className="mt-1">
                            <input  type="text" className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Tên Sản Phẩm" {...register('name',{required:true,minLength:5})} />
                            {errors.name && errors.name.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                            {errors.name && errors.name.type ==="minLength" && <span className="text-red-500">Ít Nhất 5 Ký tự</span>} 
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Ảnh
                            </label>
                            <div className="space-y-1 text-center">
                            <input    id="file-upload" type="file" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"{...register('image',{required:true})} />
                            </div>
                            {errors.image && errors.image.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                        </div>
                        <div>
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Loại Hàng
                            </label>
                            
                            <select id="cateProductId" defaultValue="" className="mt-1 p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded" {...register('cateProductId',{required:true})}>
                                <option value="">--Chọn Loại Hàng--</option>
                            {cateProduct.map((item:CateProductType) => {
                               return <option key={item._id} value={item._id}  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded" >{item.name}</option >
                            })}
                            </select>
                            {errors.cateProductId && errors.cateProductId.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                        </div>

                        </div>
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Giá
                            </label>
                            <div className="mt-1">
                            <input  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Giá Sản Phẩm"{...register('price',{required:true,valueAsNumber:true,min:0})} />
                            {errors.price && errors.price.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                            {errors.price && errors.price.type ==="valueAsNumber" && <span className="text-red-500">Phải là số</span>}
                            {errors.price && errors.price.type ==="min" && <span className="text-red-500">Phải lớn hơn 0</span>}
                            </div>
                        </div>
            
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Nội dung
                            </label>
                            <div className="mt-1">
                            <textarea   className=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" {...register('desc',{required:true,minLength:5})}/>
                            {errors.desc && errors.desc.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                            </div>
                        </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                        <button type="submit" className=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới sản phẩm
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </main>
        </div>

    </div>
  )
}

export default ProductAdd