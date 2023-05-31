import React from 'react'
import Typewriter from 'typewriter-effect'
import './styles/home.css'
import { Particle } from './Particle'

const Home = () => {

  return (
    <div className='home'>
      <Particle />
      <div className='i-left'>
        <div className="i-name">
          <span className='title_span'>Hola, soy</span> 
          <Typewriter
          options={{
            strings: ['< Aldair />'],
            autoStart: true,
            loop: true,
            typeSpeed: 90,
              backSpeed: 60,
          }}
        />
          <span className='text_span'>Hola, soy desarrollador web full-stack junior, trabajo  con react.js y node.js(express).</span>
        </div>
        <div className="i-icons">
          <ul className='social'>
          <li>
            <a href="https://github.com/AldairAlburqueque" target='_blank'>
              <span><i className='bx fa  bxl-github'></i>Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/" target='_blank'>
              <span><i className='bx fa  bxl-linkedin'></i>Linkedin</span>
              
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target='_blank'>
              <span><i className='bx fa  bxl-youtube'></i>Youtube</span>
              
            </a>
          </li>
          <li>
            <a href="https://www.twiter" target='_blank'>
              <span><i className='bx fa  bxl-twitter'></i>Twitter</span>
            </a>
          </li>
        </ul>
        </div>
      </div>

      <div className="i-right">
        <img className='photo' src={'./photo-home.jpg'} alt="" />
      </div>
    </div>
  )
}

export default Home

