import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read, update } from '../api/products'
import { ProductType } from '../types/product'
type ProductUpdateProps = {
    onUpdate:(product:ProductType)=>void
}
type FormValues = {
    name:string,
    price:number
}
const ProductUpdate = (props: ProductUpdateProps) => {
    const {id} = useParams();
    const{register,handleSubmit,formState:{errors},reset} = useForm<FormValues>()
    const navigate = useNavigate();
    useEffect(()=>{
        const getProduct = async ()=>{
            const {data} = await read(id);
            reset(data)
        }
        getProduct()
    },[])
    const onSubmit:SubmitHandler<FormValues> = data=>{
        props.onUpdate(data);
        navigate("/admin/product")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Tên sản phẩm' {...register("name")}/>
            <input type="number" placeholder='Giá sản phẩm'{...register("price")} />
            <button>Cập Nhật</button>
        </form>
    </div>
  )
}

export default ProductUpdate