import React from 'react'
import { InputForm, InputInfos } from '../component/input/input'
import GoogleConection from '../component/google/GoogleConection'
import { ButtonWhite } from '../component/button/button'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { UserService } from '../service/userService'

export const singUpAction = async ({ request }) => {

    try {
        const dataForm = await request.formData()

        const dataObject = Object.fromEntries(dataForm)

        console.log(dataObject)

        const signUpUser = await UserService.createUser(dataObject)

        console.log(signUpUser)

        return redirect("/login");

    } catch (error) {
        console.log(error.message)
    }
}

function SingUpPage() {
    return (
        <div className="singUp-page">
            <img src="src/assets/picture/loginImage.svg" alt="" />
            <div className="login-form">
                <h2>Sing up FOR FOOD RECIPE</h2>
                <GoogleConection />
                <h5>Or</h5>
                <Form
                    method='POST'
                    action=''
                >
                    <div>
                        <InputInfos
                            classe={"inputFormName"}
                            type={"text"}
                            name={"firstName"}
                            placeholder={"First name"}
                        />

                        <InputInfos
                            classe={"inputFormName"}
                            type={"text"}
                            name={"lastName"}
                            placeholder={"Last name"}
                        />
                    </div>
                    <InputInfos
                        classe={"inputFormContainer"}
                        name={"username"}
                        type={"text"}
                        placeholder={"User name"}
                    />

                    <InputInfos
                        type={"email"}
                        name={"email"}
                        placeholder={"E-mail"}
                        classe={"inputFormContainer"} />

                    <InputInfos
                        logo={"src/assets/logo/hidePassword.svg"}
                        type={"password"}
                        name={"password"}
                        placeholder={"password"}
                        classe={"inputFormContainer"} />
                    <p>By creating an account, you agree to our  <span>Terms of use</span> and
                        <span>
                            Privacy policy
                        </span>
                    </p>
                    <ButtonWhite
                        type={"submit"}
                        content={"sign up"}
                        classe={"white-btn"} />
                    <h6>
                        already have an acount ? <Link to="/login">
                            <span>Login</span>
                        </Link>
                    </h6>
                </Form>

            </div>
        </div>
    )
}

export default SingUpPage