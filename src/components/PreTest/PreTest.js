import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import "./PreTest.css"

import { Autocomplete, TextInput, Icon } from 'evergreen-ui'

function PreTest(){
    return (
        <div>
            <NavBar />
            <main>
        <div class="viewport-main">
            <div class="main-container">
                <div class="title-create">
                        <h2>Personaliza tu Test</h2>
                </div>
                <div class="icons-create-container">
                        <div>
                        <Icon icon="applications" color="success" size={100} />
                                                                                    <Autocomplete
                                                        title=""
                                                        
                                                        onChange={changedItem => console.log(changedItem)}
                                                        items={['5 Preguntas', '10 Preguntas', '15 Preguntas']}
                                                        >
                                                        {(props) => {
                                                            const { getInputProps, getRef, inputValue, openMenu } = props
                                                            return (
                                                            <TextInput
                                                                placeholder="Numero de Preguntas"
                                                                value={inputValue}
                                                                
                                                                innerRef={getRef}
                                                                {...getInputProps({
                                                                onFocus: () => {
                                                                    openMenu()
                                                                }
                                                                })}
                                                            />
                                                            )
                                                        }}
                                                        </Autocomplete>
                        </div>
                        <div>
                        <Icon icon="time" color="warning" size={100} />
                            <Autocomplete
                                                        title="Activar Temporizador"
                                                        onChange={changedItem => console.log(changedItem)}
                                                        items={['3 Minutos', '5 Minutos', '10 Minutos']}
                                                        >
                                                        {(props) => {
                                                            const { getInputProps, getRef, inputValue, openMenu } = props
                                                            return (
                                                            <TextInput
                                                                placeholder="Tiempo limite"
                                                                value={inputValue}
                                                                innerRef={getRef}
                                                                {...getInputProps({
                                                                onFocus: () => {
                                                                    openMenu()
                                                                }
                                                                })}
                                                            />
                                                            )
                                                        }}
                                                        </Autocomplete>
                        </div>
                        <div>
                        <Icon icon="lightbulb" color="info" size={100} />
                            <Autocomplete
                                                        title="Indicar Dificultad"
                                                        onChange={changedItem => console.log(changedItem)}
                                                        items={['Facil', 'Medio', 'Dificil']}
                                                        >
                                                        {(props) => {
                                                            const { getInputProps, getRef, inputValue, openMenu } = props
                                                            return (
                                                            <TextInput
                                                                placeholder="Dificultad estimada"
                                                                value={inputValue}
                                                                innerRef={getRef}
                                                                {...getInputProps({
                                                                onFocus: () => {
                                                                    openMenu()
                                                                }
                                                                })}
                                                            />
                                                            )
                                                        }}
                                                        </Autocomplete>
                        </div>
                </div>
            </div>
        </div>
      </main>
         <Footer />                                              
        </div>
    )
}

export default PreTest