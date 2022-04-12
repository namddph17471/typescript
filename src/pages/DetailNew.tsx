import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/news'
import NewRelated from '../components/NewRelated'
import { NewType } from '../types/new'

const DetailNew = () => {
    const [news,setNew] = useState<NewType>()
    const _id = useParams().id
    useEffect(()=>{
      const getNew = async ()=>{
        const {data} = await read(_id)
        setNew(data)
      }
      getNew()
    },[_id])
  return (
        <div className=" mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="mt-2  mx-auto sm:px-6  lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{news?.title}</h1>
                </div>
                <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <img src={`${news?.image}`}  alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <p>{news?.desc}</p>
                </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-3">
                <NewRelated cateNewId={news?.cateNewId._id} />
            </div>
        </div>

  )
}

export default DetailNew