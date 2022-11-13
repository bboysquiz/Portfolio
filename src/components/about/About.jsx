import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {DiCode} from 'react-icons/di'
import {ImBarcode} from 'react-icons/im'
import {GiTeacher} from 'react-icons/gi'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <LazyLoadImage src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <DiCode className="about__icon"/>
              <h5>FrontEnd Developer</h5>
              <small>2+ Years Working On Freelance</small>
            </article>

            <article className='about__card'>
              <ImBarcode className="about__icon"/>
              <h5>Labeled Product Data Analyst</h5>
              <small>2+ Years Working In Pharmaceutical Company</small>
            </article>

            <article className='about__card'>
              <GiTeacher className="about__icon"/>
              <h5>Breaking Teacher</h5>
              <small>8+ Years Teaching Break Dance</small>
            </article>
          </div>

          <p>
            I am constantly developing in different directions, but I prefer frontend developing.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About