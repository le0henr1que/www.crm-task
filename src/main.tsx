import React from 'react'
import ReactDOM from 'react-dom/client'
import Task from '../src/views/Tasks/index'
import Contact from '../src/views/Contact/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
)