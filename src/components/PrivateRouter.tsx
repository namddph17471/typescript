import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type PrivateRouterProps = {
    children:JSX.Element,
    page:string
}

const PrivateRouter = ({children,page}: PrivateRouterProps) => {
    const { user } = isAuthenticate();
    if (!user ) {
        toastr.warning("bạn chưa đăng nhập")
        return <Navigate to="/signin" />
    }
    if (page === "admin") {
        if (!user.role) {
            toastr.warning("Bạn Không phải admin")
            return <Navigate to="/signin" />
        }
    } else {
        if (!user ) {
            toastr.warning("bạn chưa đăng nhập")
            return <Navigate to="/signin" />
        }
    }

    return children;
}

export default PrivateRouter