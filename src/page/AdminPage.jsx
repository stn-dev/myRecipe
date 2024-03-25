import React, { useState } from 'react'
import SidebarComponent from '../component/adminComponent/SidebarComponent'
import Texte from '../component/text/text'
import { InputWhite } from '../component/input/input'
import { ButtonWhite } from '../component/button/button'

function AdminPage() {
    const [userPart, setUserPart] = useState(false)

    const showAllPart = () => {
        setUserPart(!userPart)

    }
    return (
        <div className="adminPage">

            {/* side bar section  */}

            <aside className='sidebarAdminPage'>
                <div className="mainMenu">
                    <Texte
                        content={"Main menu"}
                        as={"h3"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/dashboardLogo.svg"}
                        content={"Dashboard"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/overViewLogo.svg"}
                        content={"Overview"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/recipeLogo.svg"}
                        content={"Recipes"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/ingredietnLogo.svg"}
                        content={"Ingredients"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/analyticLogo.svg"}
                        content={"Analytics"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/mailLogo.svg"}
                        content={"E-mail"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/chatLogo.svg"}
                        content={"Chat"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/userLogo.svg"}
                        content={"User"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/mealPlannerLogo.svg"}
                        content={"Meal Planners"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/supportLogo.svg"}
                        content={"Support"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/settingsLogo.svg"}
                        content={"Settings"}
                    />
                </div>
                <div className="footer">
                    <Texte
                        content={"Footer"}
                        as={"h3"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/termOfUseLogo.svg"}
                        content={"Term of use"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/privacyLogo.svg"}
                        content={"Privacy Policy"}
                    />
                    <SidebarComponent
                        logo={"src/assets/adminPageLogo/logOutLogo.svg"}
                        content={"Logout"}
                    />
                </div>
            </aside>

            {/* main section  */}

            <div className="mainAdminPage">


                <header className='headerAdminPage'>
                    <div className="title">
                        <Texte
                            content={"Users"}
                            as={"h2"}
                        />
                        <Texte
                            content={"All Users"}
                            as={"p"}
                        />
                    </div>
                    <div className="optionSideAdminPage">
                        <InputWhite
                            id={"inputadminPage"}
                            classe={"inputWhiteContainer"}
                            inputClass={"input-white"}
                            placeholder={"Search..."}
                        />
                        <img src="src/assets/adminPageLogo/option1Logo.svg" />
                        <img src="src/assets/adminPageLogo/option2Logo.svg" />
                        <button >
                            <img src="src/assets/adminPageLogo/addUserLogo.svg" />
                            New Users
                        </button>
                    </div>
                </header>

                <div
                    className="userInfos"
                    onClick={showAllPart}
                >
                    <div className="profilShown">
                        <img src="src/assets/adminPageLogo/AdminPic.svg" />
                        <Texte
                            content={"john Doe"}
                            as={"h3"}
                        />
                        <Texte
                            content={" doejohn47@gmail.com"}
                            as={"h3"}
                        />
                    </div>
                    {
                        userPart &&

                        <div className="hiddenPart">
                            <Texte
                                content={"Registration date:  12/08/21"}
                                as={"h4"}
                            />
                            <Texte
                                content={"Contact:     +852 456 963"}
                                as={"h4"}
                            />
                            <Texte
                                content={"Food Preferences"}
                                as={"h3"}
                            />
                            <img src="src/assets/adminPageLogo/AdminFood.svg" />
                            <img src="src/assets/adminPageLogo/AdminLevel.svg" />
                            <p>
                                <img src="src/assets/adminPageLogo/alergic.svg" />
                                Alergic:
                                <span>
                                    Tree Nuts
                                </span>
                            </p>
                            <div className="buttonOption">
                                <ButtonWhite
                                    content={"Remove User"}
                                    classe={"white-btn"}
                                    type={"reset"}
                                />
                                <ButtonWhite
                                    content={"Disable"}
                                    classe={"white-btn"}
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default AdminPage