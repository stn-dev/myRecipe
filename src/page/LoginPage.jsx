import React from 'react'
import GoogleConection from '../component/google/GoogleConection'
import { InputInfos } from '../component/input/input'
import { ButtonWhite } from '../component/button/button'
<<<<<<< HEAD
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

=======
import { Form, Link, redirect, useActionData, useNavigation } from 'react-router-dom'
import { UserService } from '../service/userService'
import ClockLoader from "react-spinners/ClockLoader";

export const loginaction = async ({ request }) => {
    try {
        const datas = await request.formData()

        const data = Object.fromEntries(datas)
        console.log(data)

        const toLog = await UserService.loginUser(data)
        console.log(toLog)
        if (toLog?.status == 200 || toLog?.status == 201) {

            const username = toLog.data.user.username
            const email = toLog.data.user.email
            const id = toLog.data.user._id
            const token = toLog.data.token
            const refreshToken = toLog.data.refreshToken
            const avatar = toLog.data.user.avatar?.nameHashed

            if (username) {
                localStorage.setItem("username", username)
            }
            if (email) {
                localStorage.setItem("email", email)
            }
            if (id) {
                localStorage.setItem("id", id)
            }
            if (token) {
                localStorage.setItem("token", token)
            }
            if (refreshToken) {
                localStorage.setItem("refreshToken", refreshToken)
            }
            if (avatar) {
                localStorage.setItem("avatar", `http://localhost:4400/${avatar}`)
            }

            return redirect('/')
        }
        if (toLog?.status == 401) {
            alert("user doesn't exist")
            return null
        }
        if (toLog?.status == 401) {
            alert("server problem")
            return null
        }

>>>>>>> new-dynamisation
    } catch (error) {
        console.log(error.message)
    }
}
<<<<<<< HEAD



=======
>>>>>>> new-dynamisation

function LoginPage() {

    const navigation = useNavigation()
    let opacity = false
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#F27830",
        position: "absolute",
        top: "40%",
        left: "42%"
    };

    if (navigation.state === "submitting") {
        opacity = true
    }

    return (
        <div className="login-page">
            <img
                style={{ opacity: opacity && 0.5 }}
                src="src/assets/picture/loginImage.svg"
            />
            <ClockLoader
                color={"#F27830"}
                loading={opacity && true}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <div
                style={{ opacity: opacity && 0.5 }}
                className="login-form"
            >
                <h2>Welcome back</h2>
                <GoogleConection />
                <h5>Or</h5>
                <Form
                    method='POST'
<<<<<<< HEAD
                // action='/login'
=======
>>>>>>> new-dynamisation
                >
                    <InputInfos
                        type={"text"}
                        name={"username"}
<<<<<<< HEAD
                        placeholder={"Username"}
                        classe={"inputFormContainer"} />
=======
                        placeholder={"username"}
                        classe={"inputFormContainer"}
                    // styles={{ borderColor: `${empty ? "red" : "black"}` }}
                    />
>>>>>>> new-dynamisation

                    <InputInfos
                        logo={"src/assets/logo/hidePassword.svg"}
                        type={"password"}
                        name={"password"}
                        placeholder={"password"}
                        classe={"inputFormContainer"}
                    />

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
<<<<<<< HEAD

=======
>>>>>>> new-dynamisation
            </div>
        </div>
    )
}

export default LoginPage