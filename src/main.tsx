import React from 'react'
import Task from '../src/views/Tasks/index'
import Contact from '../src/views/Contact/index'
import Form from '../src/views/Form/index'

import ReactDOM from 'react-dom/client';

import Rout from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
)