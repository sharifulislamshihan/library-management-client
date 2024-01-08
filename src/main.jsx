import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routes from './Component/Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto'>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>,
  </div>
)
