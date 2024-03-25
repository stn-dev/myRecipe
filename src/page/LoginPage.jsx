import React from 'react'
import NavbarWhithSearch from '../layout/navbar/NavbarWhithSearch'
import GoogleConection from '../component/google/GoogleConection'
import { InputInfos } from '../component/input/input'
import { ButtonWhite } from '../component/button/button'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className="login-page">
            <img src="src/assets/picture/loginImage.svg" alt="" />
            <div className="login-form">
                <h2>Welcome back</h2>
                <GoogleConection />
                <h5>Or</h5>
                <form >
                    <InputInfos
                        type={"email"}
                        name={"mail"}
                        placeholder={"E-mail"}
                        classe={"inputFormContainer"} />

                    <InputInfos
                        logo={"src/assets/logo/hidePassword.svg"}
                        type={"password"}
                        name={"passsword"}
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
                </form>

            </div>
        </div>
    )
}

export default LoginPage