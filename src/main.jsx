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
import Cozinha from './pages/Cozinha.jsx'
import Snacks from './pages/Snacks.jsx'
import Bebidas from './pages/Bebidas.jsx'
import Bar from './pages/Bar.jsx'


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
{
  path: "infopage/bar",
  element: <Bar />,
},
{
 path: "infopage/bebidas",
 element: <Bebidas />, 
},
{
  path: "infopage/cozinha",
  element: <Cozinha />  ,
},

{
  path: "infopage/snacks",
  element: <Snacks />,

},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
