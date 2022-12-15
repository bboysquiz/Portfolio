import React from 'react'
import './header.css'
import CTA from './CTA'
import MEwebp from '../../assets/me.webp'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header" >
      <div className="container header__container">
        <h5>Hello I,m</h5>
        <h1>Nikita Skvirskii</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <picture>

            <source srcset={MEwebp} type="image/webp" />

            <img src={ME} alt="me" />

          </picture>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header