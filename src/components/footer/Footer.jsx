import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {SlSocialVkontakte} from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Nikita</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://wa.me/79117985687"><BsWhatsapp/></a>
        <a href="https://www.instagram.com/bboysquiz/"><FiInstagram/></a>
        <a href="https://vk.com/bboysquiz"><SlSocialVkontakte/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nikita Skvirskii. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer