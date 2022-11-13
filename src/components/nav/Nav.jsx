import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BsBriefcase} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Nav = () => {

  return (
    <nav>
      <Link
        to='header'
        smooth={true}
        duration={150}
        spy={true}
        exact='true'
        offset={0}
      ><FaHome/></Link>
      <Link 
        to="about" 
        smooth={true}
        duration={150}
        spy={true}
        exact='true'
        offset={0}
      ><AiOutlineUser/></Link>
      <Link 
        to="experience"
        smooth={true}
        duration={150}
        spy={true}
        exact='true'
        offset={0} 
      ><BsBook/></Link>
      <Link 
        to="portfolio"
        smooth={true}
        duration={150}
        spy={true}
        exact='true'
        offset={0}
      ><BsBriefcase/></Link>
      <Link 
        to="contact"
        smooth={true}
        duration={150}
        spy={true}
        exact='true'
        offset={0}
      ><AiFillMessage/></Link>
    </nav>
  )
}

export default Nav