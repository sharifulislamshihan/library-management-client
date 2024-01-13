import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routes from './Component/Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>,
  </div>
)
