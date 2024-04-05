import React from 'react'
import { InputForm, InputInfos } from '../component/input/input'
import GoogleConection from '../component/google/GoogleConection'
import { ButtonWhite } from '../component/button/button'
import { Form, Link, useNavigate } from 'react-router-dom'
import { UserService } from '../service/userService'

export const singUpAction = async ({ request }) => {

    try {
        const dataForm = await request.formData()

        const data = Object.fromEntries(dataForm)

        // const data = {
        //     userName: dataForm.get("userName"),
        //     email: dataForm.get("mail"),
        //     passsword: dataForm.get("password")
        // }
        console.log(data)

        const postUser = await UserService.createUser(data)

        console.log(postUser)

        return data;

    } catch (error) {
        throw Error(error.message)
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