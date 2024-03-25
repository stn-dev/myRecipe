import React from 'react'
import MealPlannNav from '../../component/meal planner navigation/MealPlannNav'
import MealPlannForm from '../../component/meal planner navigation/MealPlannForm'

function Lunch() {
    return (
        <div className="mealPlannerLunch">
            <MealPlannNav />
            <MealPlannForm
                meal={"Lunch"}
            />

        </div>
    )
}

export default Lunch