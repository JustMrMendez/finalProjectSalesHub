import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../src/Components/RootLayout';

const router = createBrowserRouter([
  ({path:"/",element:<RootLayout/>}),
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
   
  </React.StrictMode>,
)
