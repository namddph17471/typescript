import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const {token, user} = isAuthenticate()
export const list = () => {
    const url = `/products/?_expand=cateProductId&_order=desc&_sort=createdAt`;
    return instance.get(url);
}
export const pagination = (page?:number,limit?:number) => {
    let url = `/products/?_expand=cateProductId&_order=desc&_sort=createdAt`;
    if(page) url += `&_page=${page}&limit=${limit}`
    return instance.get(url);
}
export const productRelated = (cateProductId:any,limit = 0)=>{
    let url = `/products?_expand=cateProductId&cateProductId=${cateProductId}&_order=desc`;
    if(limit) url +=`&limit=${limit}`;
    return instance.get(url)
}
export const remove = (id:number) => {
    const url = `/products/${id}/${user._id}`;
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const addProduct = (product:ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product:ProductType) => {
    const url = `/products/${product._id}/${user._id}`;
    return instance.put(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (_id:any) => {
    const url = `/products/${_id}/?_expand=cateProductId`;
    return instance.get(url);
}
export const detail = (_id:any)=>{
    const url = `/products/${_id}`;
    return instance.get(url)
}