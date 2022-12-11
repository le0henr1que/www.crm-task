import React from "react";
import { Navigate } from 'react-router-dom'

const VerifyAuthenticToken = ({Component}:any) => {
    const recoveredToken = localStorage.getItem('token')
    return (
    
        recoveredToken ? <Navigate to="/" /> : <Component /> 

        )
    };
    
    export default VerifyAuthenticToken