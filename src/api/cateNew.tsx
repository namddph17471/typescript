
import { CateNewType } from '../types/cateNew';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const {token, user} = isAuthenticate()
export const list = () => {
    const url = '/cateNew';
    return instance.get(url);
}
export const remove = (id:any) => {
    const url = `/cateNew/${id}/${user._id}`;
    return instance.delete(url,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const addcateNew = (post:CateNewType) => {
    const url = `/cateNew/${user._id}`;
    return instance.post(url,post,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (post:CateNewType) => {
    const url = `/cateNew/${post._id}/${user._id}`;
    return instance.put(url,post,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (_id:any) => {
    const url = `/cateNew/${_id}`;
    return instance.get(url);
}