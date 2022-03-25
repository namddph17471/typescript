import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import {SubmitHandler, useForm} from "react-hook-form"
import { UserType } from '../types/user'
import { signup } from '../api/users'

type SignupProps = {
   
}
type FormInput = {
    email:string,
    user_name:string,
    password:string,
    role:string
}

const Signup = (props: SignupProps) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormInput>()
    const navigate = useNavigate()
    const onSubmit:SubmitHandler<FormInput> = async data =>{
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data))
        await signup(data)
        navigate("/signin")
    }
  return (
    <div className='w-[400px] mx-auto'>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} action="#" id="form-signin" method="POST">
            <div className="rounded">
                <div className="my-4 py-2">
                    <label className=" font-medium text-indigo-600 hover:text-indigo-500">Email address</label>
                    <input  type="email"   className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"{...register("email")} />
                </div>
                <div className="my-4 py-2">
                    <label className=" font-medium text-indigo-600 hover:text-indigo-500">User Name</label>
                    <input type="text"   className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User Name" {...register("user_name")} />
                </div>
                <div className="my-4 py-2">
                <label  className=" font-medium text-indigo-600 hover:text-indigo-500 ">Password</label>
                <input  type="password" autoComplete="current-password"  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"{...register("password")} />
                </div>
                <input type="hidden" value={0} {...register("role")} />
            </div>
            <div>
                <div className="text-sm">
                <p>
                    Bạn đã có tài khoản?
                    <NavLink to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Đăng nhập
                    </NavLink>
                </p>
                </div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Đăng ký
                </button>
            </div>
        </form>

    </div>
  )
}

export default Signup