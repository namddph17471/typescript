import { NewType } from "../types/new";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";
const {token, user} = isAuthenticate()
export const list = ()=>{
    const url = `/news/?_expand=cateNewId&_order=desc`
    return instance.get(url)
}
export const newRelated = (cateNewId:any,_id:any)=>{
    const url =`/news/${_id}?_expand=cateNewId&cateNewId=${cateNewId}&_order=desc`
    return instance.get(url)
}
export const detail = (_id:any)=>{
    const url = `/news/${_id}`
    return instance.get(url)
}
export const read = (_id:any) => {
    const url = `/news/${_id}/?_expand=cateNewId`;
    return instance.get(url);
}
export const addNew = (newData:NewType)=>{
    const url = `/news/${user._id}`
    return instance.post(url,newData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
}
export const update = (newData:NewType) => {
    const url = `/news/${newData._id}/${user._id}`;
    return instance.put(url,newData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (_id:any)=>{
    const url = `/news/${_id}`
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
}