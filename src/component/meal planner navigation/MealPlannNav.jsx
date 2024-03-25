import React from 'react'
import Texte from '../text/text'
import { ButtonWhite } from '../button/button'
import { Outlet } from 'react-router-dom'

function MealPlannNav() {
    return (
        <>
            <div className="mealPlannerNav">
                <Texte
                    content={"Meal planners"}
                    as={"h2"}
                />
                <div className="navigation">
                    <ButtonWhite
                        content={"Breakfast"}
                        classe={"orange-btn"}
                    />
                    <ButtonWhite
                        content={"Lunch"}
                        classe={"orange-btn"}
                    />
                    <ButtonWhite
                        content={"Dinner"}
                        classe={"orange-btn"}
                    />
                    <ButtonWhite
                        content={"Snack"}
                        classe={"orange-btn"}
                    />
                </div>
            </div>
        </>

    )
}

export default MealPlannNav