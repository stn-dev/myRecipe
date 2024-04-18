import React from 'react'
import { Form } from 'react-router-dom'
import Texte from '../../component/text/text'
import { InputInfos } from '../../component/input/input'
import { ButtonWhite } from '../../component/button/button'
import { UserService } from '../../service/userService'

export const profilEditAction = async ({ request }) => {
    try {
        const datas = await request.formData()
        const data = Object.fromEntries(datas)
        console.log(data)

        const putUser = await UserService.updateUser(data)
        console.log(putUser)

    } catch (error) {
        console.log(error.message)
    }
}

export const profilEditLoader = () => {

}

function ProfileEditForm() {
    return (
        <Form
            method='PUT'
            className='profilFormsContainer'>
            <Texte
                content={"My personal information"}
                as={"h3"}
            />

            <div className="formContainer">
                {/* left side of the profil form  */}

                <div className="leftSideProfilForm">
                    <InputInfos
                        name={"username"}
                        placeholder={"username*"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"FirstName"}
                        placeholder={"FirstName"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"LastName"}
                        placeholder={"LastName"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        logo={"src/assets/logo/calendar.svg"}
                        type={"date"}
                        name={"Birth date"}
                        placeholder={"Birth date"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"Gender"}
                        placeholder={"Gender"}
                        classe={"inputInfoContainer"}
                    />
                </div>

                {/*  rigth side of the profil form  */}


                <div className="rigthSideProfilForm">
                    <InputInfos
                        type={"email"}
                        name={"email"}
                        placeholder={"E-mail*"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        logo={"src/assets/logo/hidePassword.svg"}
                        type={"password"}
                        name={"password"}
                        placeholder={"password"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"Adress"}
                        placeholder={"Adress"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"Postal code"}
                        placeholder={"Postal code"}
                        classe={"inputInfoContainer"}
                    />
                    <InputInfos
                        name={"Language"}
                        placeholder={"Language"}
                        classe={"inputInfoContainer"}
                    />
                </div>
            </div>
            <div className="submitProfilForm">
                <ButtonWhite
                    content={"SAVE"}
                    classe={"white-btn"}
                    type={"submit"}
                />
            </div>
        </Form>
    )
}

export default ProfileEditForm