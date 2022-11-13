import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from "react"
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a04mi0t', 'template_6n2xxt7', form.current, 'uB-BLcBDrj6pBjnQB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }); 

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>skvirskii.nikita@gmail.com</h5>
            <a href="mailto:skvirskii.nikita@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>bboysquiz</h5>
            <a href="https://www.instagram.com/bboysquiz/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+79117985687</h5>
            <a href='https://wa.me/79117985687' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact