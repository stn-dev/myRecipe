import React from 'react'
import SocialMedia from '../../../component/social/SocialMedia'
import { InputEmail } from '../../../component/input/input'
import { ButtonWhite } from '../../../component/button/button'
import Logo from '../../../component/logo/logo'

function Footer() {
  return (
    <footer className='footer-section'>
      <div className="social-media">
        <h4>Story Connected :</h4>
        <SocialMedia />
      </div>
      <div className="subscribe">
        <h4>Subscribe to our Newsetter</h4>
        <InputEmail />
        <ButtonWhite content={"Subscribe"} classe={"white-btn"} />
      </div>
      <div className="footer-link">
        <div className="link 1">
          <ul>
            <li>home</li>
            <li>Recipes</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
            <li>sitemap</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="link 2">
          <ul>
            <li>Dinner</li>
            <li>Meals</li>
            <li>Ingredients</li>
            <li>Product vetting</li>
            <li>Occasions</li>
            <li>Cuisines</li>
            <li>KItchen Tips</li>
            <li>News</li>
            <li>Feature</li>
          </ul>
        </div>
        <div className="link 3">
          <ul>
            <li>Forum</li>
            <li>Questions/Answer</li>
          </ul>
        </div>
      </div>
      <Logo />
    </footer>
  )
}

export default Footer