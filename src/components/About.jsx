import React, { useEffect, useState } from 'react'
import './styles/about.css'

const About = () => {

  const [scrollTo , setScrollTo] = useState(false)
  console.log(scrollTo)
 
  useEffect(() =>{
  
    const handleScroll = () => {
      const cardEventElement = document.querySelector('.presentacion');

      if (cardEventElement) {
          if (isInViewport(cardEventElement)) {
              setScrollTo(true);
          } else {
              setScrollTo(false);
          }
      }

  };

  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 200;

      return rect.top + topOffset < windowHeight;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
    
  }, [])
  return (
    <div className={`presentacion ${scrollTo ? 'fade-in' : ''}`}>
      <div className= 'about_img'>
        <img src="./about.jpg" alt="" />
      </div>
      <div className="about" id='sobreMi'>
        <h2 className='about-title'>Sobre mí</h2>
        <p >Hola, soy un desarrollador web con la capacidad necesaria para realizar o resolver cualquier proyecto web. Una persona que está en constante aprendizaje así como también está dispuesto ayudar a quienes lo necesiten. Apasionado del mundo tecnológico y gamer.
          Recuerda :¡Tus metas, son las mías!
        </p>
          <button className='pdf_btn'>
            <a href="./downloads/Curriculum-A4.pdf" download>{' '}Download CV </a>
            <i className='bx bxs-download' ></i>
          </button>
      </div>
    </div>
  )
}

export default About