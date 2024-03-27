import logo from '../assets/imgs/logo.png'
import { NavBar } from './NavBar'
export function Header () {
    return (
        <div className='flex justify-center bg-[#fe9901]' >
            <img className='w-56' src={logo} alt=""  /> 
            <NavBar />
        </div>
       
    )

}