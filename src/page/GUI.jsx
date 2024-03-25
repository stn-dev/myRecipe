import React from 'react'
import NavbarForLoggedIn from '../layout/navbar/NavbarForLoggedIn'
import NavbarForLoggedInWithSearch from '../layout/navbar/NavbarForLoggedInWithSearch'
import NavbarWhithSearch from '../layout/navbar/NavbarWhithSearch'
import SocialMedia from '../component/social/SocialMedia'
import { BtnCategories, BtnCourseCreation, BtnPrivate } from '../component/button/button'
import { InputEmail, InputForm, InputInfos, InputWhite } from '../component/input/input'
import GoogleConection from '../component/google/GoogleConection'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import Text from '../component/text/text'
import NavbarForAdmin from '../layout/navbar/NavbarForAdmin'
import MealPlannForm from '../component/meal planner navigation/MealPlannForm'
import CourseCreation from './course creation /CourseCreation'
import ProfileEditForm from '../component/profileChildAnd Component/profileEditForm'
import ProfilFooterSetting from '../component/profileChildAnd Component/ProfilFooterSetting'
import ProfilPicture from '../component/profileChildAnd Component/ProfilPicture'
import ProfilPageNav from '../component/profileChildAnd Component/ProfilPageNav'
import CullinaryPreferenceForm from '../component/profileChildAnd Component/CullinaryPreferenceForm'
import RecipeComponent from '../component/profileChildAnd Component/RecipeComponent'

function GUI() {


    return (
        <div className="component">
            <NavbarForAdmin />
            <br />
            <NavbarForLoggedIn />
            <br />
            <NavbarForLoggedInWithSearch />
            <br />
            <NavbarWhithSearch />
            <br />
            <SocialMedia />
            <br />
            <BtnCategories classe={"btnCategorieOrange"} />
            <br />
            <BtnCourseCreation />
            <br />
            <BtnPrivate content={"public"} classe={"public"} />
            <br />
            <InputEmail />
            <br />
            <InputWhite
                id={"inputGUI"}
                classe={"inputWhiteContainer"} inputClass={"input-white"}
                placeholder={"Search..."}
            />
            <br />
            <GoogleConection />
            <br />
            <Text
                as={"h2"}
                content={"je suis un composant texte"} />
            <br />
            <InputInfos classe={"inputInfoContainer"} logo={"src/assets/logo/calendar.svg"} type={"text"} name={"test"} placeholder={'test...'} />
            <br />
            <InputInfos classe={"inputInfoContainer"} logo={"src/assets/logo/hidePassword.svg"} type={"password"} name={"test2"} placeholder={"password..."} />
            <br />
            <InputInfos classe={"inputFormContainer"} logo={"src/assets/logo/hidePassword.svg"} type={"password"} placeholder={"password ..."} name={"pass"} />
            <br />
            <InputInfos type={"texte"} placeholder={"firstname"} classe={"inputFormName"} />
            <br />
            <MealPlannForm
                meal={"Breakfast"}
            />
            <br />
            <CourseCreation />
            <br />
            <ProfilPicture
                userName={"mario"}
                gender={"Man"}
                registrationDate={"12/02/24"}
            />
            <br />
            <ProfileEditForm />
            <br />
            <ProfilFooterSetting />
            <br />
            <ProfilPageNav />
            <br />
            <CullinaryPreferenceForm />
            <br />
            <RecipeComponent />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default GUI