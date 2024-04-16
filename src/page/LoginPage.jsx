import React from 'react'
import NavbarWhithSearch from '../layout/navbar/NavbarWhithSearch'
import GoogleConection from '../component/google/GoogleConection'
import { InputInfos } from '../component/input/input'
import { ButtonWhite } from '../component/button/button'
import { Link, Form, useNavigate, redirect } from 'react-router-dom'
import { UserService } from '../service/userService';



export const LoginAction = async ({ request }) => {

    try {


        const formData = await request.formData()
        const datas = Object.fromEntries(formData)
        console.log(datas)

        const toLog = await UserService.loginUser(datas)
        console.log(toLog)

        const token = toLog.data.token;
        const refresh = toLog.data.refreshToken;
        const id = toLog.data.user._id;

        if (token) {
            localStorage.setItem("token", token)
        }
        if (refresh) {
            localStorage.setItem("refreshToken", refresh)
        }
        if (id) {
            localStorage.setItem("id", id)
        }

        return redirect("/");

    } catch (error) {
        console.log(error.message)
    }
}




function LoginPage() {
    return (
        <div className="login-page">
            <img src="src/assets/picture/loginImage.svg" alt="" />
            <div className="login-form">
                <h2>Welcome back</h2>
                <GoogleConection />
                <h5>Or</h5>
                <Form
                    method='POST'
                // action='/login'
                >
                    <InputInfos
                        type={"text"}
                        name={"username"}
                        placeholder={"Username"}
                        classe={"inputFormContainer"} />

                    <InputInfos
                        logo={"src/assets/logo/hidePassword.svg"}
                        type={"password"}
                        name={"password"}
                        placeholder={"password"}
                        classe={"inputFormContainer"} />
                    <p>Forget passsword?</p>
                    <ButtonWhite
                        type={"submit"}
                        content={"Log in"}
                        classe={"white-btn"} />
                    <h6>
                        Don't have an acount ? <Link to="/singUp">
                            <span>
                                sing up
                            </span>
                        </Link>
                    </h6>
                </Form>

            </div>
        </div>
    )
}

export default LoginPage