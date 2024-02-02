import logo from '../img/logo.png'
import '../Layout/header.css'
export function Header () {
    return (
        <div className={'header-container'} >
            <img className={'logo'} src={logo}alt="" width={200} /> 
        </div>
       
    )

}