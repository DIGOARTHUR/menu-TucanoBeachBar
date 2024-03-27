import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import { InfoPage } from './pages/InfoPage.jsx'
import Cafe from './pages/Cafe.jsx'


const router = createBrowserRouter ([{
  path: "/",
  element: <App />, 
  
},
{
  path: "infopage",
  element: <InfoPage />
},
{
  path: "infopage/cafe",
  element: <Cafe />,
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
