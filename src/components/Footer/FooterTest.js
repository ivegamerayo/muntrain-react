import React from "react"
import { TextInput, Button, toaster } from 'evergreen-ui'

class FooterTest extends React.Component{
   
    render(){
        return (
            <div>
                <footer>
                    <div class="start-game-containers">
                   <React.Fragment> <Button marginRight={12} iconBefore="arrow-left">AtrÃ¡s</Button>
                    <TextInput width={380} height={60} name="text-input-name" placeholder="Escribe tu pregunta"/> 
                    <Button marginRight={12} iconBefore="arrow-right">Siguiente</Button></React.Fragment>
                    </div>
          </footer>
            </div>
        )
    }
}


export default FooterTest;