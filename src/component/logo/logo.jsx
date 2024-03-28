import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate()

    const toHome = () => {
        navigate("/")
    }
    return (
        <img
            src="src/assets/Logo.png" className='logo'
            onClick={toHome}
        />
    )
}

export default Logo