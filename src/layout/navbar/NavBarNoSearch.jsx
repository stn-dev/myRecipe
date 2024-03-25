import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ButtonWhite } from '../../component/button/button'
import Logo from '../../component/logo/logo'

function NavBar() {
    return (
        <nav className='login-nav' >
            <Logo />
            <ul className='navLinkUser'>
                <NavLink to="/" ><li>Home</li></NavLink>
                <NavLink to="categorie" ><li>Categories <span><img src="src/assets/arrowDown.svg" alt="" /></span></li> </NavLink>
                <NavLink to="mealPlanner" ><li>Meal planner</li> </NavLink>
                <NavLink to="course" ><li>Courses</li> </NavLink>
                <NavLink to="about" ><li>About Us </li></NavLink>
                <NavLink to="contact" ><li>contact</li> </NavLink>
            </ul>
            <div className='divBtn'>
                <ButtonWhite content={"Login"} classe={"orange-btn"} />
                <ButtonWhite content={"Sing in"} classe={"white-btn"} />
            </div>
        </nav>
    )
}

export default NavBar