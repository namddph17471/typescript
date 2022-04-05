import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {SubmitHandler,useForm} from 'react-hook-form'
import { signup } from '../api/auth'

type FormInput = {
    email:string,
    name:string,
    password:string
}

const Signup = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit= async (data)=>{
        await signup(data);
        navigate('/signin')
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
                    <input type="text"   className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User Name" {...register("name")} />
                </div>
                <div className="my-4 py-2">
                <label  className=" font-medium text-indigo-600 hover:text-indigo-500 ">Password</label>
                <input  type="password" autoComplete="current-password"  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"{...register("password")} />
                </div>
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