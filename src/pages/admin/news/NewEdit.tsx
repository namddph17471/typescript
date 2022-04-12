import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getcateNew, selectCateNew } from "../../../redux/catenewSlice";
import { CateNewType } from "../../../types/cateNew";
import { uploadFile } from "../../../utils";
import { detail,read } from "../../../api/news";
import { updateNew } from "../../../redux/newSlice";

type FormValues = {
    _id:any,
    title:string,
    desc:string,
    image:string,
    cateNewId:any
}
const NewEdit = ( )=> {
    const _id = useParams().id;
    const{register,handleSubmit,formState:{errors},reset} = useForm<FormValues>()
    const navigate = useNavigate();
    const cateNew = useSelector(selectCateNew)
    useEffect(()=>{
        dispatch(getcateNew())
        const getNew = async ()=>{
            const {data} = await detail(_id);
            reset(data)
        }
        getNew()
    },[])
    const dispatch = useDispatch()
    const onSubmit:SubmitHandler<FormValues> = async (data:any)=>{
        try {
            if (typeof data.image === "object" && data.image.length) {
                data.image = await uploadFile(data.image[0]);
            }
            dispatch(updateNew(data))
            toastr.success("Cập nhật  thành công");
            navigate("/admin/news")
        } catch (error: any) {
            toastr.error(error.response.data.message)
        }
    }
  return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Cập Nhật Tin Tức
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
                                        <input  type="text" className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Tên Sản Phẩm" {...register('title',{required:true,minLength:5})} />
                                        {errors.title && errors.title.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                                        {errors.title && errors.title.type ==="minLength" && <span className="text-red-500">Ít Nhất 5 Ký tự</span>} 
                                        </div>
                                    </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Ảnh
                                    </label>
                                    <div className="space-y-1 text-center">
                                        <input   id="file-upload" type="file" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"{...register('image')} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Loại Tin Tức
                                    </label>
                                    <select defaultValue=""   {...register("cateNewId",{required:true})}  className="mt-1 p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded" >
                                    <option value="">--Chọn Loại Tin Tức--</option>
                                    {cateNew.map((item:CateNewType) => {
                                    return <option key={item._id} value={item._id}  className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded" >{item.name}</option >
                                    })}
                                    {errors.cateNewId && errors.cateNewId.type ==="required" && <span className="text-red-500">Không được để trống</span>}
                                    </select>
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
                                        Cập nhật Tin Tức
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

export default NewEdit