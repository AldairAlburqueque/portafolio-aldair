import React from 'react'
import './styles/about.css'

const About = () => {
  return (
    <div className='presentation'>
      <div className="about_img">
        <img src="./about.jpg" alt="" />
      </div>
      <div className="about" id='sobreMi'>
        <h3 className='about-title'>Sobre mí</h3>
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