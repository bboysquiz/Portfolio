import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SlSocialVkontakte} from 'react-icons/sl'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/nikitaSkvirskiy" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/bboysquiz" target="_blank"><FaGithub /></a>
        <a href="https://vk.com/bboysquiz" target="_blank"><SlSocialVkontakte/></a>
    </div>
  )
}

export default HeaderSocials