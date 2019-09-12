import React from "react"
import logoMuntrain from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./NavBar.css"

import { Button, Pane, Dialog } from 'evergreen-ui'

function NavBar(){

    return (
        <div>
            <nav>
            <div class="nav-container">
            <div class="logo-container">
                <img width="48px" height="48px" src={logoMuntrain} alt="logo" />
                <Link to="/"><h1 class="logo">Muntrain</h1></Link>
            </div>
            <div class="tiempo-container">
             <Button >ATRÃS</Button>
            </div>
            </div>
      </nav>
        </div>
        )
    }


export default NavBar;