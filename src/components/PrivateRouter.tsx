import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type PrivateRouterProps = {
    children:JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user } = isAuthenticate();
    if (!user?.role) {
        return (
            toastr.error("Bạn Không phải Admin"),
            <Navigate to="/signin"/>
        )
    }
  return props.children
}

export default PrivateRouter