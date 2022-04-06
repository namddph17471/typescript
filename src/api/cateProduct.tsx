import { CateProductType } from '../types/cateProduct';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const {token, user} = isAuthenticate()
export const list = () => {
    const url = '/cateProduct';
    return instance.get(url);
}
export const remove = (id:any) => {
    const url = `/cateProduct/${id}/${user._id}`;
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const addCateProduct = (product:CateProductType) => {
    const url = `/cateProduct/${user._id}`;
    return instance.post(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product:CateProductType) => {
    const url = `/cateProduct/${product._id}/${user._id}`;
    return instance.put(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (_id:any) => {
    const url = `/cateProduct/${_id}`;
    return instance.get(url);
}