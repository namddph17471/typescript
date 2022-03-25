import { UserType } from '../types/user';
import instance from './instance';

export const signup = (user:UserType) => {
    const url = '/users';
    return instance.post(url,user);
}
export const signin = (user:UserType) => {
    const url = '/users';
    return instance.post(url,user);
}
