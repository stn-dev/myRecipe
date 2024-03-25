import React from 'react'
import MealPlannNav from '../../component/meal planner navigation/MealPlannNav'
import MealPlannForm from '../../component/meal planner navigation/MealPlannForm'

function Snack() {
    return (
        <div className="mealPlannerSnack">
            <MealPlannNav />
            <MealPlannForm
                meal={"Snack"}
            />

        </div>
    )
}

export default Snack