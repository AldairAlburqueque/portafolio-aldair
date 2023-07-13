import React, {useRef, useState} from 'react';
import emailjs, { send } from '@emailjs/browser';
import Swal from 'sweetalert2'
import './styles/contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault()
    emailjs.sendForm('service_mmsqo7j', 'template_hd8xyt9', form.current, '6XqKi__DgkdqNpE36')
      Swal.fire({
        title: 'Enviado!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
      e.target.reset()
  }
  
  
  return (
    <section className="contact section" id='contact'>
      <h2 className="section_title">Contactame</h2>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Escríbeme</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className='contact_card-data'>aldairalburqueque8@gmail.com</span>

              <a href="mailto:aldairalburqueque8@gmail.com" className="contact_button" target='blank_'>Write me{' '}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className='contact_card-data'>+51 975751508</span>

              <a href="https://api.whatsapp.com/send?phone=972751508&text=Hello, more information1" className="contact_button" target='blank_'>Write me{' '}<i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Escríbeme tu proyecto</h3>

          <form  
          className="contact_form"
          onSubmit={sendEmail}
          ref={form}
          action="" >
            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag">Nombre</label>
              <input id="send" type="text" name='name' className='contact_form-input' placeholder='Insert your name' 
              required          
              />
            </div>

            <div className="contact_form-div">
              <label htmlFor="" className="contact_form-tag"> Email</label>
              <input id="send" type="email" name='email' className='contact_form-input' placeholder='Insert your email' 
              required           
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label htmlFor="" className="contact_form-tag">Mensaje</label>
              <textarea id="send" name="project" cols="30" rows="10" className='contact_form-input' placeholder='Writer your message'
              required
              ></textarea>
            </div>

            <button className='button button--flex'>Send Message</button>
            
          </form>
        </div>

      </div>
    </section>
  )
  }

export default Contact