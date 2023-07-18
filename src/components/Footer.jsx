import React, { useState } from 'react'
import './styles/footer.css'

const Footer = () => {

  const [openMenu, setOpenMenu] =      useState(true);
  
  const handleMenu = () => {
      setOpenMenu(!openMenu);
    };



  return (
    <div className='footer'>

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

      {/* <i className='bx bxl-github g-bx'></i> */}
    </div>
  )
}

export default Footer