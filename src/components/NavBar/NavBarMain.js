import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
import logoMuntrain from "../../assets/logo.png"

function NavBarMain(){
    return (
        <div className="nav-index">
            <header>
        <div class="logo-container">
          <img width="48px" height="48px" src={logoMuntrain} alt="logo" />
          <Link to="/"><h1 class="logo">Muntrain</h1></Link>
        </div>
        <nav>
          <ul class="nav-links">
            <li><a class="nav-link" href="#">MEJORA CONSTANTE</a></li>
            <li><a class="nav-link" href="#">HISTORIA</a></li>
            <li><a class="nav-link" href="#">CONTACTO</a></li>
          </ul>
        </nav>
       
      </header>
        </div>
    )
}

export default NavBarMain;