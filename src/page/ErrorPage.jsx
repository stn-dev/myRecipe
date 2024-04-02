import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import ErrorHandling from '../component/errorComponenet/ErrorHandling'

function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="errorPage">
            <div className="messageContainer">
                <h2>Sorry!</h2>
                <h3>Something wrong happened</h3>

                <ErrorHandling />

                <p>
                    Try to login here
                    <span
                        onClick={() => navigate("/")}
                    >
                        login
                    </span>
                    , or go back to home
                    <span
                        onClick={() => navigate("/login")}
                    >
                        Home
                    </span>
                </p>
            </div>
            <div className="cuistotImage"></div>
        </div>
    )
}

export default ErrorPage