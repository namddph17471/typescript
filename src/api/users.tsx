import { UserType } from "../types/user";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const {token, user} = isAuthenticate()

export const update = (userData:UserType) => {
    const url = `/users/${userData._id}/${user._id}`;
    return instance.put(url,userData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const getUser = ()=>{
    const url = `/users`
    return instance.get(url)
}
export const getOneUser = (_id:any)=>{
    const url =  `/users/${_id}`
    return instance.get(url)
}