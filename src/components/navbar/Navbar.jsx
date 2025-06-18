import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from "/src/assets/img/ph-logo-white.webp"

export default function Navbar() {
    


    return(
        <>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="ancres">
                    <NavLink to={"/"} className={"link"}>Pizza </NavLink>
                </div>
            </nav>
        </>
    )
}