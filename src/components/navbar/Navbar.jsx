import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
import logo from "/src/assets/img/ph-logo-white.webp"

export default function Navbar() {
    


    return(
        <>
            <nav>
                <div className="nav-logo">
                 <Link to={"/"}> <img src={logo} alt="" /></Link>   
                </div>
                <div className="ancres">
                    <NavLink to={"/"} className={"link"}>Pizza </NavLink>
                </div>
            </nav>
        </>
    )
}