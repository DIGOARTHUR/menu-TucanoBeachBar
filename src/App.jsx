

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import  Home  from './pages/Home';
import Bar from './pages/Bar';
import Bebida from './pages/Bebida';
import Cafeteria from './pages/Cafeteria';
import Cozinha from './pages/Cozinha';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Home/>} />
      <Route path='/Bar' element={<Bar/>} />
      <Route path='/Bebida' element={<Bebida/>} />
      <Route path='/Cafeteria' element={<Cafeteria/>} />
      <Route path='/Cozinha' element={<Cozinha/>} />
    </Route>
  )
)



function App() {

  return (
    <div style={{backgroundImage:`url("bg4.webp")`}} >
      
      <RouterProvider router={router} />
    </div>
  )

}

export default App;
