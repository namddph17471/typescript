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
    console.log(user)
    if (page === "admin") {
        if (!user  || !user.role) {
            return <Navigate to="/signin" />
        }
    } else {
        if (!user ) {
            return <Navigate to="/signin" />
        }
    }

    return children;
}

export default PrivateRouter