import React from 'react'
import MealPlannNav from '../component/meal planner navigation/MealPlannNav'
import { Outlet } from 'react-router-dom'

function MealPlanner() {
    return (
        <div className="meal-planner-page">
            <MealPlannNav />
            <div className="explanation">
                <p>
                    Meal planning is a practical and efficient approach to managing your diet and nutrition. It involves the process of deciding in advance what you'll eat for specific meals over a designated period, typically a week. Whether you're aiming to eat healthier, save time, reduce food waste, or stick to a budget, meal planning can help you achieve your goals.
                </p>
                <p>
                    By taking the time to plan your meals, you can make well-informed choices about the foods you consume, ensuring a balanced and nutritious diet. It also allows you to consider dietary restrictions or preferences, such as vegetarian, vegan, gluten-free, or low-carb diets. Meal planning is not only beneficial for individuals but also for families, helping streamline the cooking process and making it easier to provide nourishing meals for everyone.
                </p>
                <h4>Story Connected</h4>
            </div>
            <Outlet />
        </div>
    )
}

export default MealPlanner