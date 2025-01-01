import React, {useRef, useState} from 'react';
import emailjs, { send } from '@emailjs/browser';
import Swal from 'sweetalert2'
import './styles/contact.css'

const Contact = () => {
  
  return (
    <section className="contact section" id='contact'>
      <h2 className="section_title">Contactame</h2>

      <div className="contact_container container">
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
    </section>
  )
  }

export default Contact