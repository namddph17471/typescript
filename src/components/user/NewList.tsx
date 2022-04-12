import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getNew, selectNew } from '../../redux/newSlice'
import { NewType } from '../../types/new'

const NewList = () => {
    const dispatch = useDispatch()
    const news = useSelector(selectNew)
    useEffect(()=>{
        dispatch(getNew())
    },[])
  return (
    <div>
        <div className="bg-white">
            <div className=" mx-auto py-16 px-4 sm:py-12 sm:px-6  lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 m-3">Tin Tức</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {news && news.map((item:NewType,index:any)=>{
                    return <NavLink to={`/news/${item._id}`} className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img src={`${item.image}`} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-[250px] object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 className="text-center mt-1 text-lg font-medium text-gray-900">{item.title}</h3>
                        </NavLink>
                    })}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewList