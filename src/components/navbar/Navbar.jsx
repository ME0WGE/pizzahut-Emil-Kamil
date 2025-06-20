import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "/src/assets/img/ph-logo-white.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Créer le media query
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Fonction de callback pour gérer les changements
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Vérifier l'état initial
    setIsMobile(mediaQuery.matches);

    // Ajouter le listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Navbar Mobile
  if (isMobile) {
    return (
      <nav className="mobile-nav">
        <div className="scroll-container">
          <div className="mobile-nav-content">
            <NavLink
              to="/menus"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Menus
            </NavLink>
            <NavLink
              to="/entrees"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Entrées
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Pizza
            </NavLink>
            <NavLink
              to="/specialites"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Spécialités
            </NavLink>
            <NavLink
              to="/boissons"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Boissons
            </NavLink>
            <NavLink
              to="/desserts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Desserts
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }

  // Navbar Desktop
  return (
    <nav className="desktop-nav">
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
