import React from "react"
import './Footer.css';
import { TextInput } from 'evergreen-ui'

class Footer extends React.Component{
   
    render(){
        return (
            <div>
                <footer>
                    <div class="start-game-container">
                   <React.Fragment><TextInput width={380} height={60} name="text-input-name" placeholder="Escribe un tÃ­tulo para este test"/> 
                   <button onClick={() => this.props.handleStateUp(true)} >Crear TEST sdfsdfsdfsdf</button></React.Fragment>
                    </div>
          </footer>
            </div>
        )
    }
}


export default Footer;