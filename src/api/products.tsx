import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const {token , user} = isAuthenticate()
export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const addProduct = (product:ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (id: any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const update = (product:ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url,product);
}
export const read = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}