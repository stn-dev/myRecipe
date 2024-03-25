import React from 'react'
import { Form } from 'react-router-dom'
import Texte from '../text/text'
import { InputInfos } from '../input/input'
import { ButtonWhite } from '../button/button'

function CullinaryPreferenceForm() {
    return (
        <Form className='cullinaryPrefFormContainer'>
            <Texte
                content={"MY CULINARY PREFERENCIES"}
                as={"h3"}
            />

            <div className="bothSideContainer">
                {/* left side of the cullinary preference form  */}

                <div className="leftSideCullinaryForm">
                    <div className="cullinaryForm">
                        <Texte
                            content={"My favorites ingredients"}
                            as={"p"}
                        />
                        <InputInfos
                            name={"ingredient"}
                            classe={"inputInfoContainer"}
                        />
                        <InputInfos
                            name={"ingredient"}
                            classe={"inputInfoContainer"}
                        />
                        <InputInfos
                            name={"ingredient"}
                            classe={"inputInfoContainer"}
                        />
                    </div>
                    <div className="cullinaryForm">
                        <Texte
                            content={"My dream  meal"}
                            as={"p"}
                        />
                        <InputInfos
                            name={"dream meal"}
                            classe={"inputInfoContainer"}
                        />
                    </div>
                </div>


                {/* rigth side of the cullinary preference form  */}

                <div className="rigthSideCullinaryForm">
                    <div className="cullinaryForm">
                        <Texte
                            content={"My most common meal"}
                            as={"p"}
                        />
                        <InputInfos
                            name={"common meal"}
                            classe={"inputInfoContainer"}
                        />
                    </div>
                    <div className="cullinaryForm">
                        <Texte
                            content={"My specialities"}
                            as={"p"}
                        />
                        <InputInfos
                            name={"specialities"}
                            classe={"inputInfoContainer"}
                        />
                    </div>
                    <div className="cullinaryForm">
                        <Texte
                            content={"My current culinary obsession"}
                            as={"p"}
                        />
                        <InputInfos
                            name={"current"}
                            classe={"inputInfoContainer"}
                        />
                    </div>
                </div>
            </div>

            <div className="submitCullinaryForm">
                <ButtonWhite
                    content={"SAVE"}
                    type={"submit"}
                    classe={"white-btn"}
                />
            </div>

        </Form>
    )
}

export default CullinaryPreferenceForm