import React from 'react'
import { InputForm, InputInfos } from '../component/input/input'
import GoogleConection from '../component/google/GoogleConection'
import { ButtonWhite } from '../component/button/button'
import { Link } from 'react-router-dom'

function SingUpPage() {
    return (
        <div className="singUp-page">
            <img src="src/assets/picture/loginImage.svg" alt="" />
            <div className="login-form">
                <h2>Sing up FOR FOOD RECIPE</h2>
                <GoogleConection />
                <h5>Or</h5>
                <form >
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
                        name={"userName"}
                        type={"text"}
                        placeholder={"User name"}
                    />

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
                </form>

            </div>
        </div>
    )
}

export default SingUpPage