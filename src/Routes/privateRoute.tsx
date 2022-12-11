import React from "react";
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Component}:any) => {
    const recoveredToken = localStorage.getItem('token')
    return (
    
        !recoveredToken ? <Navigate to="/Login" /> : <Component />

        )
    };
    export default PrivateRoute