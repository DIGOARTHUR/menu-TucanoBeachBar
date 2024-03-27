import React from 'react'
import { Header } from '../components/Header'
import logo from '../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import { BsArrowReturnLeft } from "react-icons/bs";
import menu from '../data/data';
import coffee from"../assets/imgs/coffee.png"
export default function Cafe() {


  const categoria = menu.filter(menu => menu.category == "cafeteria");

  return (
    <>
   <div id="cafe" className='flex justify-center bg-[#fe9901]' >
                <img className='w-56' src={logo} alt="" /> </div>
    <nav>
       <Link class=" absolute left-0 top-0 h-16 w-16 "   to={`/infopage`} > <BsArrowReturnLeft /></Link>
        </nav>
        <div className="flex flex-col gap-1 mx-2 mt-7" >

        
          {categoria.map(menu => (
            <div className="flex justify-between p-5 border-solid border-2 border-neutral-500 rounded-md"
             key={menu.category} >

              <div>
                <h2 className="text-lg font-semibold"  >{menu.name}</h2>
            
            <p class="text-sm " >{menu.description}</p>
            <p>{menu.price}</p>

            
  
            </div>
            
            
            <img src={coffee} className="h-12"/>
              </div>
              

            
          ) )}
          
          
        
        </div>
    </>
  )
}
