import React from 'react'
import Texte from '../text/text'
import { ButtonWhite } from '../button/button'
import { InputWhite } from '../input/input'

function RecipeComponent() {
    return (
        <div className="myrecioeContainer">
            <Texte
                content={"MY RECIPE"}
                as={"h3"}
            />
            <div className="section-bar">
                <p>Recipe book</p>
                <p>Course list</p>
                <p>My contributions</p>
            </div>
            <div className="categorieBar">
                <ButtonWhite
                    content={"Categorie"}
                    classe={"orange-btn"}
                />
                <InputWhite
                    id={"recipe search"}
                    classe={"inputWhiteContainer"}
                    inputClass={"input-white"}
                    placeholder={"Search..."}
                />
            </div>
            <div className="selection">
                <p>Selected</p>
                <p>Deselected</p>
                <img src="src/assets/logo/deleteIcon.svg" />
            </div>
            <div className="submitRecipe">
                <ButtonWhite
                    content={"SAVE"}
                    classe={"white-btn"}
                    type={"submit"}
                />
            </div>
        </div>
    )
}

export default RecipeComponent