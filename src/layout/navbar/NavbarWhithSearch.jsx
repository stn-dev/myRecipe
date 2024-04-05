import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputWhite } from '../../component/input/input'
import { ButtonWhite } from '../../component/button/button'
import Logo from '../../component/logo/logo'


function NavbarWhithSearch() {

    return (
        <div>
            <nav className='User-nav' >
                <Logo />
                <ul className="navLinkUser">
                    <NavLink to="/" ><li>Home</li></NavLink>
                    <NavLink to="/categorie"
                    ><li>Categories
                            <span>
                                <img src="src/assets/arrowDown.svg" alt="" />
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/mealPlanner" ><li>Meal planner</li> </NavLink>
                    <NavLink to="/course" ><li>Courses</li> </NavLink>
                    <NavLink to="/about" ><li>About Us </li></NavLink>
                    <NavLink to="/contact" ><li>contact</li> </NavLink>
                </ul>
                <InputWhite
                    id={"inputUser"}
                    classe={"inputWhiteContainer"}
                    inputClass={"input-white"}
                    placeholder={"Search..."}
                />
                <div className='divBtn'>
                    <ButtonWhite
                        content={"Login"}
                        classe={"orange-btn"}
                    />
                    <ButtonWhite
                        content={"Sing up"}
                        classe={"white-btn"}
                    />
                </div>
            </nav>
        </div>
    )
}

export default NavbarWhithSearch