import React from 'react'
import { InputWhite } from '../../component/input/input'
import { NavLink, useNavigate } from 'react-router-dom'
import { ButtonWhite } from '../../component/button/button'
import Logo from '../../component/logo/logo'

function NavbarForLoggedInWithSearch() {
    const navigate = useNavigate()
    const avatar = localStorage.getItem("avatar")

    const goToProfilePage = () => {
        navigate("/profil")
    }


    return (
        <nav className='loggedNavWithSearch'>
            <Logo />
            <ul className='navLinkUser'>
<<<<<<< HEAD
                <NavLink to="/" ><li>Home</li></NavLink>
                <NavLink to="/categorie" ><li>Categories <img src="src/assets/arrowDown.svg" alt="arrow" /></li> </NavLink>
                <NavLink to="/mealPlanner" ><li>Meal planner</li> </NavLink>
                <NavLink to="/course" ><li>Courses</li> </NavLink>
                <NavLink to="/about" ><li>About Us </li></NavLink>
                <NavLink to="/contact" ><li>contact</li> </NavLink>
=======
                <NavLink to="/" >
                    <li>Home</li>
                </NavLink>
                <NavLink to="categorie" >
                    <li>Categories
                        <img src="/src/assets/arrowDown.svg" alt="arrow" />
                    </li>
                </NavLink>
                <NavLink to="mealPlanner" >
                    <li>Meal planner</li>
                </NavLink>
                <NavLink to="course" >
                    <li>Courses</li>
                </NavLink>
                <NavLink to="about" >
                    <li>About Us </li>
                </NavLink>
                <NavLink to="contact" >
                    <li>contact</li>
                </NavLink>
>>>>>>> new-dynamisation
            </ul>
            <InputWhite
                id={"inputLogged"}
                classe={"inputWhiteContainer"}
                inputClass={"input-white"}
                placeholder={"Search..."}
            />
            <div className="profil-container">
                <div
                    className='profil'
                    onClick={goToProfilePage
                    }
                >
                    <img src={avatar ? avatar : "src/assets/profil.svg"} />
                </div>
                <div className='notification'>
                    <img src="src/assets/notification.svg" />
                </div>
                <ButtonWhite
                    content={"Log out"}
                    classe={"white-btn"}
                />
            </div>
        </nav>
    )
}

export default NavbarForLoggedInWithSearch