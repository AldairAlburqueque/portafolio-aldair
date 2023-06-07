import React, { useState } from 'react'
import './styles/portafolios.css'

export const Portafolio = () => {


  return (
    <div className='card_portafolio' id='portafolio'>
      <div className='portafolio_name'>
        <h2 className='portafolio_title'>Portafolio</h2>
        <p className='portafolio_text'>Estos son mis proyectos realizados</p>
      </div>
        <ul className="portafolio_list" 
        >
        <li>
            <img className='portafolio_img' src="./proyectos-img/ecommerce.png" alt="" />
            <div className="capa">
              <h3>E-commerce</h3>
              <div className='capa-icons'>
                <a href="https://github.com/AldairAlburqueque/entregable6.git" target='blank'>
                  <i className='bx bxl-github'></i>
                </a>
                <a href="https://entregable-6-aldair-alburqueque.netlify.app" target='blank'>
                  <i className='bx bxl-netlify'></i>
                </a>
              </div>
            </div>
        </li>
        <li>
            <img className='portafolio_img' src="./proyectos-img/pokedex.png" alt="" />
            <div className="capa">
              <h3>Pokedex</h3>
              
              <div className='capa-icons'>
                <a href="https://github.com/AldairAlburqueque/pokeApi-Aldair.git" target='blank'>
                <i className='bx bxl-github'></i>
                </a>
                <a href="https://poke-api-aldair.netlify.app" target='blank'>
                <i className='bx bxl-netlify'></i>
                </a>
              </div>
            </div>
          
        </li>
        <li>
            <img className='portafolio_img' src="./proyectos-img/rickandmorty.png" alt="" />
            <div className="capa">
              <h3>Rick and Morty</h3>
              <div className='capa-icons'>
                <a href="https://github.com/AldairAlburqueque/entregable-3.git"
                target='blank'>
                <i className='bx bxl-github'></i>
                </a>
                <a href="https://entregable-3-aldair-alburqueque.netlify.app" target='blank'>
                <i className='bx bxl-netlify'></i>
                </a>
              </div>
            </div>
            
        </li>
        <li>
            <img className='portafolio_img' src="./proyectos-img/weather.png" alt="" />
            <div className="capa">
              <h3>Weather App</h3>
              <div className='capa-icons'>
                <a href="https://github.com/AldairAlburqueque/entregable2.git" target='blank'>
                <i className='bx bxl-github'></i>
                </a>
                <a href="https://aldair-entregable2.netlify.app" target='blank'>
                <i className='bx bxl-netlify'></i>
                </a>
              </div>
            </div>
            
        </li>
      </ul>
      
    </div>
  )
}
