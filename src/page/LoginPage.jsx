import React from 'react'
import NavbarWhithSearch from '../layout/navbar/NavbarWhithSearch'
import GoogleConection from '../component/google/GoogleConection'
import { InputInfos } from '../component/input/input'
import { ButtonWhite } from '../component/button/button'
import { Link, Form, useNavigate } from 'react-router-dom'
import { UserService } from '../service/userService'



export const LoginAction = async ({ request }) => {
    try {
        // const navigate = useNavigate()

        const formData = await request.formData()
        const data = Object.fromEntries(formData)

        const toLogin = await UserService.loginUser(data)
        console.log(data)
        console.log(toLogin)

        const token = toLogin.data.token;
        const refreshToken = toLogin.data.refreshToken;
        const id = toLogin.data.user._id;

        if (token) {
            toLogin.config.headers.Authorization = `Bearer ${token}`

            localStorage.setItem("token", token)
        }
        if (refreshToken) {
            localStorage.setItem("refreshToken", refreshToken)
        }
        if (id) {
            localStorage.setItem("id", id)
        }

        if (toLogin.status == 200 ||
            toLogin.status == 201
        ) {
            // navigate("/")
            alert("you are succesfully logged in")
        } if (toLogin.status == 401) {
            // navigate("/login")
            alert("you are not logged in , verify your username and password or try to sing up")
        }

        return data;

    } catch (error) {
        if (error.status == 401 && localStorage.getItem("token")) {
            try {
                const toRefresh = async () => {
                    const res = await UserService.getRefreshToken()

                    if (res.token) {
                        toLogin.headers.Authorization = `Bearer ${res.token}`
                    }
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        else {
            console.error(error.message)
        }
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