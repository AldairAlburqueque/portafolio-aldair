import React, { useState } from 'react'
import './styles/footer.css'

const Footer = () => {

  const [openMenu, setOpenMenu] =      useState(true);
  
  const handleMenu = () => {
      setOpenMenu(!openMenu);
    };



  return (
    <div className='footer'>

      <ul className='footer_contact'>
        <li>
          <a href="https://github.com/AldairAlburqueque" target='blank_'>
            <i className='bx bf bxl-github'></i>
            Git 
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=972751508&text=Hello, more information1" target='blank_'> <i className="bx bxl-whatsapp bf "></i>{' '}
            WhatsApp
          </a>
          
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/" target='_blank'>
            <i className='bx bf  bxl-linkedin'></i>
            Linkedin
            </a>
            
        </li>
      </ul>
      

      <ul className="footer_menu">
          <li className='footer_list'>
            <a href="#" onClick={handleMenu}>Home</a>
          </li>
          <li className="footer_list">
            <a href="#sobreMi" onClick={handleMenu}>Sobre mí</a>
          </li>
          <li className="footer_list">
            <a href="#habilidades" onClick={handleMenu}>Habilidades</a>
          </li>
          <li className="footer_list">
            <a href="#portafolio" onClick={handleMenu}>Portafolio</a>
          </li>
          <li className="footer_list">
            <a href="#contact" onClick={handleMenu}>Contactame</a>
          </li>
        </ul>

    </div>
  )
}

export default Footer