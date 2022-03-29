import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../types/product";
type ProductAddProp = {
    onAdd:(product:ProductType)=>void
}
type FormValues = {
    name: string,
    price: number,
  };
const ProductAdd = (props: ProductAddProp) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate()
    const onSubmit:SubmitHandler<FormValues> = (data)=>{
        props.onAdd(data);
        navigate('/admin/products');
    }
  return (
    <div>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)} >
            <div className="m-4">
                <input className="border" type="text"{...register('name',{required:true,minLength:5})} />
                {errors.name && errors.name.type ==="required" && <span className="text-red-500">required</span>}
                {errors.name && errors.name.type ==="minLength" && <span className="text-red-500">minLength</span>}
            </div>
            <div className="m-4">
                <input className="border" type="number"{...register('price')} />
            </div>
            <button className="border p-[3px] mt-2 ">Thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd