import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function IsAuth() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [pathname])

    return (
        <Outlet />
    )
}

export default IsAuth