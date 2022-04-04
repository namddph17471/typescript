import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const {token, user} = isAuthenticate()
export const list = () => {
    const url = '/cateProduct';
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/cateProduct/${id}`;
    return instance.delete(url);
}
export const addCateProduct = (product) => {
    const url = `/cateProduct/${user._id}`;
    return instance.post(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product) => {
    const url = `/cateProduct/${product._id}`;
    return instance.put(url,product);
}
export const read = (_id: number) => {
    const url = `/cateProduct/${_id}`;
    return instance.get(url);
}