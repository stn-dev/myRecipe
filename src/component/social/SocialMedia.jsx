import React from 'react'
import { Link } from 'react-router-dom'

function SocialMedia() {
    return (
        <div className='social'>
            <Link to="https://www.facebook.com/">
                <img src="src/assets/social/fb.svg" />
            </Link>
            <Link to="https://www.instagram.com/">
                <img src="src/assets/social/instta.svg" />
            </Link>
            <Link to="https://www.linkedin.com/signup?_l=fr">
                <img src="src/assets/social/heart.svg" />
            </Link>
            <Link to="https://twitter.com/login?lang=fr">
                <img src="src/assets/social/twiiter.svg" />
            </Link>
        </div>
    )
}

export default SocialMedia