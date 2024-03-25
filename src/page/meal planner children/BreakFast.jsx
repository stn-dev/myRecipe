import React from 'react'
import MealPlannNav from '../../component/meal planner navigation/MealPlannNav'
import MealPlannForm from '../../component/meal planner navigation/MealPlannForm'

function BreakFast() {
    return (
        <div className="mealPlannerBreakfast">
            <MealPlannNav />
            <MealPlannForm
                meal={"Breakfast"}
            />

        </div>
    )
}

export default BreakFast