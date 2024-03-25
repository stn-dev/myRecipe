import React from 'react'
import Texte from '../text/text'
import { Form } from 'react-router-dom'
import { InputInfos } from '../input/input'
import { ButtonWhite } from '../button/button'

function MealPlannForm({ meal }) {

    const arrMeal = [{ day: "Monday" }, { day: "Tuesday" }, { day: "Wednesday" }, { day: "Thursday" }, { day: "Friday" }, { day: "Saturday" }, { day: "Sunday" }]

    return (
        <Form className="mealPlnnerFormContainer">
            <Texte
                content={`What's for ${meal} ?`}
                as={"h2"}
            />
            <Texte
                content={`Your 7 ${meal} planners`}
                as={"h4"}
            />
            <div className='inputForms'>
                {
                    arrMeal.map((meals, id) => (
                        <div className="form"
                            key={id}
                        >
                            <Texte
                                content={meals.day}
                                as={"h3"}
                            />
                            <InputInfos
                                logo={"src/assets/logo/edit.svg"}
                                type={"text"}
                                name={meals.day}
                                classe={"inputInfoContainer"}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="submitForm">
                <ButtonWhite
                    content={"Save"}
                    classe={"white-btn"}
                    type={"submit"}
                />
                <button className='white-btn'>
                    Download PDF
                    <img src="src/assets/logo/downloadLogo.svg" />
                </button>
            </div>
        </Form>
    )
}

export default MealPlannForm