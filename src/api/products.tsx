import { ProductType } from '../types/product';
import instance from './instance';

export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const addProduct = (product:ProductType) => {
    const url = '/products';
    return instance.post(url,product);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}