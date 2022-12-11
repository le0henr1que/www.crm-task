import React from 'react'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {AuthProvider} from "../providers/auth";
import PrivateRoute from './privateRoute';
import VerifyAuthenticToken from './verifyAtenticToken';

import Task from "../views/Tasks/index";
import Contact from "../views/Contact/index";
import Form from "../views/Form/index";
import Login from "../views/Login/index";

export interface RoutProps {
}
const Rout: React.FunctionComponent<RoutProps> = (props) =>{
    return (
        <BrowserRouter>
          <AuthProvider>
              <Routes>
                <Route  path="/" element={<PrivateRoute  Component={Task}/>} />
                <Route  path="/Contact/:id" element={<PrivateRoute  Component={Contact}/>} />
                <Route  path="/Form" element={<Form/>} />
                <Route  path="/Login" element={<VerifyAuthenticToken Component={Login}/>} />

              </Routes>
          </AuthProvider>
      </BrowserRouter>
    )
}

export default Rout