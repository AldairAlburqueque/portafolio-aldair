import React, { useState } from 'react';
import './styles/header.css';
import Toggle from './Toggle';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="header">
      <div className="dark_mode">
        <Toggle/>
      </div>
      <div className="menu_hamburger">
        <i
          onClick={handleMenu}
          className={openMenu ? 'bx bx-menu' : 'bx bx-x'}
        ></i>
      </div>
      <nav className={openMenu ? 'nav_header' : 'nav_header open_menu'}>
        <ul className="menu_list">
          <li className="link_item">
            <a href="#" onClick={handleMenu}>Home</a>
          </li>
          <li className="link_item">
            <a href="#sobreMi" onClick={handleMenu}>Sobre mí</a>
          </li>
          <li className="link_item">
            <a href="#habilidades" onClick={handleMenu}>Habilidades</a>
          </li>
          <li className="link_item">
            <a href="#portafolio" onClick={handleMenu}>Portafolio</a>
          </li>
          <li className="link_item">
            <a href="#contact" onClick={handleMenu}>Contactame</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
