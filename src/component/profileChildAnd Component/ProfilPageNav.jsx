import React, { useState } from 'react'
import Texte from '../text/text'
import { useNavigate, useSearchParams } from 'react-router-dom';

function ProfilPageNav() {
    const [condition, setCondition] = useState(true)
    const navigate = useNavigate()

    const navApear = () => {
        setCondition(!condition)
    }
    const toCullinaryPreference = () => {
        navigate("cullinaryPreference")
    }
    const toMyRecipe = () => {
        navigate("myRecipe")
    }
    const toMyPersonalInfos = () => {
        navigate('/profil')
    }


    return (
        <div className="profilPageNavigation">
            <h3
                className='menu'
                onClick={navApear}
            >
                <img src="src/assets/logo/arro<LeftSimpleIcon.svg" />
                Profil menu
            </h3>
            {
                condition &&
                <div className="navigationItems">
                    <div className="navigationItem"
                        onClick={toMyPersonalInfos}                    >
                        <Texte
                            content={"MY PERSONAL INFORMATION"}
                            as={"h4"}
                        />
                        <img src="src/assets/logo/arro<LeftSimpleIcon.svg" />
                    </div>
                    <div
                        className="navigationItem"
                        onClick={toCullinaryPreference}
                    >
                        <Texte
                            content={"MY CULINARY PREFERENCIES"}
                            as={"h4"}
                        />
                        <img src="src/assets/logo/arro<LeftSimpleIcon.svg" />
                    </div>
                    <div
                        className="navigationItem"
                        onClick={toMyRecipe}
                    >
                        <Texte
                            content={"RECIPE"}
                            as={"h4"}
                        />
                        <img src="src/assets/logo/arro<LeftSimpleIcon.svg" />
                    </div>
                    <div className="navigationItem">
                        <Texte
                            content={"FAVORITE RECIPE"}
                            as={"h4"}
                        />
                        <img src="src/assets/logo/arro<LeftSimpleIcon.svg" />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfilPageNav