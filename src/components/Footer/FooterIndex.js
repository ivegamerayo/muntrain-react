import React from 'react';
import { directive } from '@babel/types';
import { Pane, Alert } from "evergreen-ui"

function FooterIndex(){
    return (
        <React.Fragment>
            <Pane>
            <Alert
                appearance="card"
                intent="warning"
                onRemove = "func"
                isRemoveable = "true"
                title="Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a travess de su navegacion. Si continuas navegando aceptas su uso."
                marginBottom={32}
            />
            </Pane>
            <footer className="footer-camara">
        <p>Muntrain es un proyecto realizado para <a target="_blank" href="http://www.camaraleon.com/">Camara de Comercio Leon</a></p>
      </footer>
        </React.Fragment>
    )
}

export default FooterIndex;