import React, { useEffect, useState } from 'react'
import './styles/about.css'

const About = () => {

  const [scrollTo , setScrollTo] = useState(false)
  const [scrollAbout, setScrollAbout] = useState(false)
  
  useEffect(() =>{
  
    const handleScroll = () => {
      
      const cardEventElement = document.querySelector('.about_img');

      if (cardEventElement) {
          if (isInViewport(cardEventElement)) {
              setScrollTo(true);
          } else {
              setScrollTo(false);f
          }
      }
      
      const cardEvent = document.querySelector('.about');

      if (cardEventElement) {
          if (isInViewport(cardEvent)) {
              setScrollAbout(true);
          } else {
              setScrollAbout(false);
          }
      }
  };

  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 100;

      return rect.top + topOffset < windowHeight;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
    
  }, [])

  return (
    
    <div className={`presentacion`} >
      <div className= {`about_img ${scrollTo ? 'fade-in' : ''}`}>
        {/* <img src="./about.jpg" alt="" /> */}
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzNqZzM0MmoyeWMxcDhzbmI2N3c2NzVkYXRwNWhiZW80OGx6amV3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"></img>
        
      </div>
      <div className={`about ${scrollAbout ? 'fade' : ''}`} >
        <h2 className='about-title'  id='sobreMi'>Sobre mí</h2>
        <p >Hola, soy un desarrollador web con la capacidad necesaria para realizar o resolver cualquier proyecto web. Una persona que está en constante aprendizaje así como también está dispuesto ayudar a quienes lo necesiten. Apasionado del mundo tecnológico y gamer.
        </p>
          <button className='pdf_btn'>
            <a href="./downloads/Curriculum.pdf" download>{' '}Download CV </a>
            <i className='bx bxs-download' ></i>
          </button>
      </div>
    </div>
  )
}

export default About