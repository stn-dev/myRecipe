import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorHandling() {

    return (
        <div className="errorMessage">
            <h3> "The page doesn't exist" </h3>
        </div>
    )
}
export default ErrorHandling