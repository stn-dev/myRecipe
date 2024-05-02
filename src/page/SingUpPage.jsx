import React from 'react'
import { InputInfos } from '../component/input/input'
import GoogleConection from '../component/google/GoogleConection'
import { ButtonWhite } from '../component/button/button'
import { Form, Link, redirect, useActionData, useNavigation } from 'react-router-dom'
import { UserService } from '../service/userService'
import { useState, CSSProperties } from "react";
import ClockLoader from "react-spinners/ClockLoader";

export const singUpAction = async ({ request }) => {
    try {
        const datas = await request.formData()
        const name = datas.get("username")
        const mail = datas.get("email")
        const password = datas.get("password")
        const error = {}

        const data = Object.fromEntries(datas)
        console.log(data)

        if (name === "") {
            error.name = alert("username section must containe someting")
            return null
        }
        if (mail === "") {
            error.mail = alert("email section must containe someting")
            return null
        }
        if (password === "") {
            error.password = alert("password section must containe someting")
            return null
        }

        const singUp = await UserService.createUser(data)
        console.log(singUp)
        if (singUp.status == 200 || singUp.status == 201) {
            alert("you are registered succesfully, try to login now")
            return redirect('/login')
        }

    } catch (error) {
        console.log(error.message)
    }

}

function SingUpPage() {
    let opacity = false
    const navigation = useNavigation()
    const error = useActionData()
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#F27830",
        position: "absolute",
        top: "47%",
        left: "43%"
    };

    error?.name && error.name
    error?.mail && error.mail
    error?.password && error.password

    if (navigation.state === "submitting") {
        opacity = true
    }

    return (
        <div className="singUp-page">
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
                <h2>Sing up FOR FOOD RECIPE</h2>
                <GoogleConection />
                <h5>Or</h5>
                <Form
                    method='POST'
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
                        placeholder={"Username"}
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
                        content={"sing up"}
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