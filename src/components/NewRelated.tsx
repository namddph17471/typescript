import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { newRealted } from '../api/news'
import { NewType } from '../types/new'

type NewRelatedProps = {
    cateNewId?:any
}

const NewRelated = ({cateNewId}: NewRelatedProps) => {
    const[newRelateds,setNew] = useState<any>()
    useEffect(()=>{
        const getNew = async ()=>{
            const {data} = await newRealted (cateNewId,4)
            setNew(data)
        }
        getNew()
    },[cateNewId])
  return (
    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Bài viết liên quan</h1>
        <div className="grid grid-rows-1 gap-y-10 sm:grid-rows-2 gap-x-6 lg:grid-rows-3 xl:grid-rows-4 xl:gap-x-8">
            {newRelateds?.newRelateds && newRelateds?.newRelateds.map((item:NewType,index:any)=>{
            return <NavLink to={`/news/${item._id}`} className="group">
                <div className="mt-2  mx-auto sm:px-6  lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-2">
                    <div className=" rounded  lg:block">
                    <img src={`${item.image}`}   className="w-20 h-10 " />
                    </div>
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <h4 className="text-xl font-extrabold tracking-tight text-gray-900 ">{item.title}</h4>
                </div>
            </div>
                </NavLink>
            })}
                    
        </div>
    </div>
  )
}

export default NewRelated