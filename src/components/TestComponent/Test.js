import React from "react"
import { Pane, Label, Textarea, FilePicker } from 'evergreen-ui'
import "./Test.css"

function Test(){
    return (
        <div>
            <main>
        <div class="viewport-main">
            <div class="main-containerTest">
                <div class="title-create">
                    <div class="half">
                                <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 1
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 2
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    </div>
                    <div class="half">
                    <Pane>
                                <Label 
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 3
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 4
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    </div>
                </div>
                <div class="title-create">
                <FilePicker marginLeft={92} marginTop={50} multiple width={"50%"}/>
                </div>
            </div>
        </div>
      </main>
        </div>
    )
}

export default Test