import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "/src/assets/img/ph-logo-white.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-logo">
          <Link to={"/"}>
            <img src={logo} alt="Pizza Hut" />
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to={"/"} className={"link"}>
            Menus
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Entrées
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Pizza
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Spécialités
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Boissons
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Desserts
          </NavLink>
        </div>
        <div className="nav-actions">
          <Link to={"/"} className={"login-btn"}>
            Se connecter
          </Link>
          <div className="language-selector">
            <span>FR</span>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}
