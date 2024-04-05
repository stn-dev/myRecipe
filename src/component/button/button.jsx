import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

// classe => white-btn / orange-btn

export function ButtonWhite({ content, classe, type }) {
    const navigate = useNavigate()
    const handleClick = () => {
        // if (type == "submit") {
        //     e.preventDefault()
        // }
        if (content == "Login") {
            navigate("/login")
        } if (content == "Sing up" || content == "Sing in") {
            navigate("/singUp")
        } if (content == "Log out") {
            localStorage.clear()
            navigate("/")
        } if (content == "Breakfast") {
            navigate('/mealPlannerBreakFast')
        } if (content == "Lunch") {
            navigate('/mealPlannerLunch')
        } if (content == "Dinner") {
            navigate('/mealPlannerDinner')
        } if (content == "Snack") {
            navigate('/mealPlannerSnack')
        } if (content == "Cancel") {
            navigate(-1)
        }
    }
    return (
        <button
            className={classe}
            onClick={handleClick}
            type={type}
        >
            {content}
        </button>
    )
}

export function BtnCourseCreation() {
    const navigate = useNavigate()
    const toCourseCreation = () => {
        navigate('/CourseCreation')
    }
    return (
        <button
            className='courseCreation'
            onClick={toCourseCreation}
        >
            course creation <span>+</span>
        </button>
    )
}

// classe => btnCategorieOrange / btnCategorieWhite

export function BtnCategories({ classe }) {
    return (
        <button className={classe} >
            Categories
        </button>
    )
}

// classe => private / public

export function BtnPrivate({ content, classe }) {
    let switchClasse = classe
    if (content == "private") {
        switchClasse = "private"
    } else {
        switchClasse = "public"
    }
    return (
        <button className={switchClasse} >
            {content}
        </button>
    )

}
