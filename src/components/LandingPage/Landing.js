import React from 'react';
import NavBarMain from '../NavBar/NavBarMain';
import FooterIndex from "../Footer/FooterIndex"
import { Link } from "react-router-dom"

import { Button } from "evergreen-ui"
import mapaLanding from "../../assets/map-test.jpg"
import "./Landing.css"

class Landing extends React.Component{
    
   render(){
       return (
        <div>
            <NavBarMain />
            <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>Un Entrenamiento a la Altura de La Competicion
                </h1>
              <h3>
                Mejora tus habilidades en el deporte de Orientacion gracias a tests 
                ideados especaficamente para corredores. <br/>
                Juega a pruebas de memoria y mucho mas.
              </h3>
            </div>
            <div className="cta">
            <Link to="/entrar"><Button className="btn-create" appearance="primary" marginRight={12} height={40}>CREAR CUENTA</Button></Link>
            <Link to="/personaliza-test"><Button className="btn-do" marginRight={12} height={40}>HAZ UN TEST</Button></Link>
            
            
            </div>
          </div>
          <div className="cover">
            <img src={mapaLanding} alt="matebook" />
          </div>
        </section>
        </main>
        <FooterIndex />
        </div>
       )
   }
}

export default Landing;