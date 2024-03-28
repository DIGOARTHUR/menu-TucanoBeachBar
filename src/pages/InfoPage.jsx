import logo from '../assets/imgs/logo.png'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import App from '../App';



export function InfoPage() {
    return (
        <div id='infopage' >
            <div className='flex justify-center bg-[#fe9901]' >
                <img className='w-56' src={logo} alt="" />
                <nav>
                    <Link class=" absolute left-0 top-0 h-16 w-16 " to={`/`} > <BsArrowReturnLeft /></Link>
                </nav>
            </div>
            <div class="text-2xl text-center m-1  justify-center max-w-full " >
                <ul class="mb-16" >

                    <li class="pb-3 sm:pb-4  mt-5 p-2 mb-1
                     boder-solid border-2 border-[#fe9901]/35 rounded-full
                     " >
                        <Link to={`cafe`} >Cafeteria</Link>

                    </li>

                    <li class="pb-3 sm:pb-4 p-2 mb-1
                    boder-solid border-2 border-[#fe9901]/35 rounded-full " ><Link to={`bar`}>Bar</Link>

                    </li>

                    <li class="pb-3 sm:pb-4 p-2 mb-1
                    boder-solid border-2 border-[#fe9901]/35 rounded-full" > 
                    
                    <Link to={`cozinha`}>Cozinha</Link>
                    </li>

                    <li class="pb-3 sm:pb-4 p-2 mb-1
                    boder-solid border-2 border-[#fe9901]/35 rounded-full " > <Link to={`bebidas`}>Bebidas</Link></li>

                    <li class="pb-3 sm:pb-4 p-2 
                    boder-solid border-2 border-[#fe9901]/35  rounded-full " > 
                    <Link to={`snacks`}>Snacks</Link>  </li>

                </ul>
            </div>
            <h2 class=" flex justify-center text-xl mt-5 " >Siga nos nas redes sociais:</h2>

            <div class="flex justify-center" >

                <a href="http://www.facebook.com/Tucanobeachbar/?locale=pt_PT"><BsFacebook class="size-16 m-5  " /></a>
                <a href="http://"><BsInstagram class="size-16 m-5 " /></a>
            </div>
            <footer class=" p-5 " >

                <p class="flex justify-center text-xl " >Como foi a sua experiencia?</p>
                <div class="flex justify-center m-5" >
                    <a href="https://www.google.com/search?hl=pt-PT&gl=pt&q=Tucano+Beach+Bar,+Figeira+de+Foz,+Buarcos&ludocid=11305364385480908704&lsig=AB86z5XLHjXJBG6btSPl9Q9-Xgq8#lrd=0xd223720d5ff35b1:0x9ce4b9029cf11fa0,3">
                        <FcGoogle class="size-16 " />
                    </a> <p class="m-5" >deixe sua avaliação!</p>

                </div>


            </footer>

        </div>
    )
}
