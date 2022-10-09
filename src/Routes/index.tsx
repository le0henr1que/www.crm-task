import React from 'react'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import {AuthProvider} from "../providers/auth";

import Task from "../views/Tasks/index"
import Contact from "../views/Contact/index"
import Form from "../views/Form/index"

export interface RoutProps {
}
const Rout: React.FunctionComponent<RoutProps> = (props) =>{
    return (
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Task/>} />
            <Route  path="/Contact/:id" element={<Contact/>} />
            <Route  path="/Form" element={<Form/>} />
          </Routes>
      </BrowserRouter>
    )
}

export default Rout