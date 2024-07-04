import logo from '../assets/imgs/logo.png'
export function Header () {
    return (
        <div className='flex justify-center bg-[#fe9901] bg-opacity-25 transition-all h-[240px] delay-150' >
            <img className='w-56' src={logo} alt=""  /> 
        </div>
       
    )

}