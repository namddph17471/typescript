import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.password)
    if (!user.role) {
        return <Navigate to="/signin"/>
    }
  return props.children
}

export default PrivateRouter