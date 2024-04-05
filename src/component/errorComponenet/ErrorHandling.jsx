import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorHandling() {
    const error = useRouteError();

    if (error.status == 404) {
        return (
            <div className="errorMessage">
                <h3> {error.status} </h3>
                <h3> "The page doesn't exist" </h3>
            </div>
        )
    }
}



export default ErrorHandling