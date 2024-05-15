import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorHandling() {
<<<<<<< HEAD
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



=======

    return (
        <div className="errorMessage">
            <h3> "The page doesn't exist" </h3>
        </div>
    )
}
>>>>>>> new-dynamisation
export default ErrorHandling