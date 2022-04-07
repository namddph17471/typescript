import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { number } from 'yup'
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { read, update } from '../api/products'
import { getcateProduct } from '../redux/cateproductSlice'
import { updateProduct } from '../redux/productSlice'
import { CateProductType } from '../types/cateProduct'
import { ProductType } from '../types/product'
import { uploadFile } from '../utils'
type ProductUpdateProps = {
}
type FormValues = {
    _id:number,
    name:string,
    price:number,
    desc:string,
    image:string,
    cateProductId:any
}
const ProductUpdate = () => {
    const _id = useParams().id;
    const [preview, setPreview] = useState<string>();
    const{register,handleSubmit,formState:{errors},reset} = useForm<FormValues>()
    const navigate = useNavigate();
    const cateProduct = useSelector(data =>{
        return data.cateProduct.value
    })
    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(()=>{
        dispatch(getcateProduct())
        const getProduct = async ()=>{
            const {data} = await read(_id);
            reset(data)
        }
        getProduct()
    },[])
    const dispatch = useDispatch()
    const onSubmit:SubmitHandler<FormValues> = async data=>{
        try {
            if (typeof data.image === "object" && data.image.length) {
                data.image = await uploadFile(data.image[0]);
            }
            dispatch(updateProduct(data))
            toastr.success("Cập nhật  thành công");
            navigate("/admin/products")
        } catch (error: any) {
            toastr.error(error.response.data.message)
        }
       
    }
  return (
    <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Cập Nhật Sản phẩm
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
                        <div className="col-span-3 ">
                            <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                            <div className="mt-1 h-[500px]">
                                <img
                                    src={ preview || "https://res.cloudinary.com/namddph17471/image/upload/v1645490263/no-thumbnail-medium-16315289445371324098298-0-0-620-992-crop-16315296413801134506614_vc8xjb.png"}
                                    alt="Preview Image"
                                    className="h-full w-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Ảnh
                            </label>
                            <div className="space-y-1 text-center">
                            <input  onChange={e => handlePreview(e)} id="file-upload" type="file" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"{...register('image')} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Loại Hàng
                            </label>
                            
                            <select id="cateProductId" className="mt-1 p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded" {...register('cateProductId')}>
                            {cateProduct.map((item:CateProductType) => {
                               return <option value={item._id}  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded " >{item.name}</option>
                            })}
                            {errors.cateProductId && errors.cateProductId.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                            </select>
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
                            Số Lượng
                            </label>
                            <div className="mt-1">
                            <input  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Số Lượng" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Nội dung
                            </label>
                            <div className="mt-1">
                            <textarea   className=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" {...register("desc")} />
                            </div>
                        </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                        <button type="submit" className=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cập Nhât 
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </main>
        </div>
  )
}

export default ProductUpdate