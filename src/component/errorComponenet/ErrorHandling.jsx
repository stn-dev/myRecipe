import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorHandling() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status == 404) {
            return (
                <div className="errorMessage">
                    <h3> {error.status} </h3>
                    <h3> "The page doesn't exist" </h3>
                </div>
            )
        }
        if (error.status == 401) {
            return (
                <div className="errorMessage">
                    <h3> {error.status} </h3>
                    <h3> "You are not authorized to see this page </h3>
                </div>
            )
        }
        if (error.status == 500 ||
            error.status == 501 ||
            error.status == 502
        ) {
            return (
                <div className="errorMessage">
                    <h3> {error.status} </h3>
                    <h3> "The problem come from our API" </h3>
                </div>
            )
        }
        else {
            <div className="errorMessage">
                <h3> {error.status} </h3>
                <h3> "An uncknown error occured" </h3>
            </div>
        }
    }

}

export default ErrorHandling