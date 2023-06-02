import React from 'react'
import './styles/skills.css'

const Skills = () => {
  return (
    <div className='habilidades' id='habilidades'>
      <div className='skill_name'>
        <h3 className='skills_title'>Habilidades</h3>
      </div>
      <div className='skills'>
        <ul className='cube'>
          <li className='front'>
          <i className='bx bxl-html5 bx-skill'></i>
            HTML
          </li>
          <li className='back'>
            <i className='bx bxl-redux bx-skill'></i>
          </li>
          <li className='left'>
          <i className='bx bxl-react bx-skill'></i>
            React JS
          </li>
          <li className='right'>
          <i className='bx bxl-css3 bx-skill'></i>
            CSS
          </li>
          <li className='top'></li>
          <li className='bottom'></li>
          </ul>


          <ul className='cube'>
            <li className='front'>
          <i className='bx bxl-nodejs bx-skill'></i>
            Node JS
          </li>
          <li className='back_two'>
          <i className='bx bxl-github bx-skill'></i>
          </li>
          <li className='left'>
          <i className='bx bxl-postgresql bx-skill'></i>
            PostgresSQL
          </li>
          <li className='right'>
          <i className='bx bxl-javascript bx-skill'></i>
            JavaScript
          </li>
          <li className='top'></li>
          <li className='bottom'></li>
          </ul>
          
      </div>
    </div>
  )
}

export default Skills