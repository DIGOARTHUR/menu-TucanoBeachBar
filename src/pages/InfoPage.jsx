import logo from '../assets/imgs/logo.png'
import Cafe from "./Cafe";
import Snacks from "./Snacks";
import Bar from "./Bar";
import Bebidas from "./Bebidas";
import Cozinha from "./Cozinha";
import { NavBar } from '../components/NavBar';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";



export function InfoPage () {
    return (
        <div>
                <div className='flex justify-center' >
            <img className='w-56' src={logo} alt=""  /> 
        </div>
        <div class="text-2xl" >
            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700"  >
            <li class="pb-3 sm:pb-4 text-1xl " >
            <a href={Cafe}>Café</a> 
            </li>
          <li class="pb-3 sm:pb-4   text-1xl" ><a href="#Bar">Bar</a></li>
          <li class="pb-3 sm:pb-4  text-1xl" >  <a href={Cozinha}>Cozinha</a></li>
        <li class="pb-3 sm:pb-4 text-1xl " > <a href="#Bebidas">Bebidas</a></li>
         <li class="pb-3 sm:pb-4 text-1xl " > <a href={Snacks}>Snacks</a> </li>
          
            </ul>
        </div>
        <h2 class=" flex justify-center text-xl  " >Siga nos nas redes sociais:</h2>

         <div class="flex justify-center" >
           
          <a href="http://www.facebook.com/Tucanobeachbar/?locale=pt_PT"><BsFacebook class="size-16 m-5  "  /></a>
            <a href="http://"><BsInstagram class="size-16 m-5 " /></a>
         </div>
         <footer class=" border-t border-black p-5 " >

            <p class="flex justify-center text-xl " >Como foi a sua experiencia?</p>
            <div class="flex justify-center m-5" >
                <a href="https://www.google.com/search?hl=pt-PT&gl=pt&q=Tucano+Beach+Bar,+Figeira+de+Foz,+Buarcos&ludocid=11305364385480908704&lsig=AB86z5XLHjXJBG6btSPl9Q9-Xgq8#lrd=0xd223720d5ff35b1:0x9ce4b9029cf11fa0,3">
     <FcGoogle class="size-16 "   />
</a> <p class="m-5" >deixe sua avaliação!</p>
          
            </div>
 

         </footer>
         
        </div>
    )
}