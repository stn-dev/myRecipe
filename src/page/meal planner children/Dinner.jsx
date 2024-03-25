import React from 'react'
import MealPlannNav from '../../component/meal planner navigation/MealPlannNav'
import MealPlannForm from '../../component/meal planner navigation/MealPlannForm'

function Dinner() {
    return (
        <div className="mealPlannerDinner">
            <MealPlannNav />
            <MealPlannForm
                meal={"Dinner"}
            />

        </div>
    )
}

export default Dinner