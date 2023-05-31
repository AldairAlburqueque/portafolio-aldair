import React from 'react'
import Typewriter from 'typewriter-effect'
import './styles/home.css'
import { Particle } from './Particle'

const Home = () => {

  return (
    <div className='home'>
      <Particle />
      <div>
      </div>
      <div className='i-left'>
        <div className="i-name">
          <span className='title_span'>Hola, mi nombre es</span> 
          <Typewriter
          options={{
            strings: [ 'Aldair'],
            autoStart: true,
            loop: true,
            typeSpeed: 90,
              backSpeed: 60,
          }}
        />
          <span className='text_span'>Hola, soy desarrollador full-stack junior, trabajo  con react.js y node.js(express).</span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/AldairAlburqueque" target='_blank'>
            <i className='bx bx-s  bxl-github' ></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target='_blank'>
            <i className='bx bx-s  bxl-linkedin'></i>
          </a>
          
          <i className='bx bx-s  bxl-instagram'></i>
        </div>
        
      </div>

      <div className="i-right">
        <img className='photo' src={'./photo-home.jpg'} alt="" />
      </div>
    </div>
  )
}

export default Home

