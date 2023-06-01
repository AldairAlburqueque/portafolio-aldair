import React from 'react'
import './styles/skills.css'

const Skills = () => {
  return (
    <div className='card_skills' id='habilidades'>
      <div className='skill_name'>
        <h3 className='skills_title'>Habilidades</h3>
      </div>
      <div className='skills'>
        <ul className='skills_list'>
          <li className='front'>
          <i className='bx bxl-html5 bx-skill'></i>
            HTML
          </li>
          <li className='back'>
          <i className='bx bxl-css3 bx-skill'></i>
            CSS
          </li>
          <li className='left'>
          <i className='bx bxl-react bx-skill'></i>
            React JS
          </li>
          <li className='right'>
          <i className='bx bxl-redux bx-skill'></i>
            Redux
          </li>
          <li className='top'>top</li>
          <li className='bottom'>Botton</li>
          </ul>


          {/* <ul>
            <li>
          <i className='bx bxl-nodejs bx-skill'></i>
            Node JS
          </li>
          <li>
          <i className='bx bxl-github bx-skill'></i>
            GitHub
          </li>
          <li>
          <i className='bx bxl-postgresql bx-skill'></i>
            PostgresSQL
          </li>
          <li>
          <i className='bx bxl-javascript bx-skill'></i>
            JavaScript
          </li>
          </ul> */}
          
       
      </div>
    </div>
  )
}

export default Skills