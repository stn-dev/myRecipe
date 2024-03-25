import React from 'react'
import Texte from '../text/text'

function ProfilPicture({ userName, gender, registrationDate }) {
    return (
        <div className="profilPictureContainer">
            <img src="src/assets/logo/profilPictureLogo.svg" />
            <Texte
                content={"My profil"}
                as={"h3"}
            />
            <div className="profilInfos">
                <p>User: {userName} </p>
                <p>gender: {gender} </p>
                <p>Registred Since: {registrationDate} </p>
            </div>
        </div>
    )
}

export default ProfilPicture