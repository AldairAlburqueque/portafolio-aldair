import React from 'react'
import './styles/skills.css'

const Skills = () => {
  return (
    <div className='habilidades' id='habilidades'>
      <div className='skill_name'>
        <h2 className='skills_title'>Habilidades</h2>
      </div>
        <ul className='skill_ul'>
          <li className='skill_list'>
            <i className='bx bxl-html5 bx-skill'></i>
              HTML
          </li>
          <li className='skill_list'>
            <i className='bx bxl-css3 bx-skill'></i>
              CSS
          </li>
          <li className='skill_list'>
            <i className='bx bxl-bootstrap bx-skill'></i>
            Bootstrap
          </li>
          <li className='skill_list'>
            <i className='bx bxl-javascript bx-skill'></i>
              JavaScript
          </li>
          <li className='skill_list'>
          <i className='bx bxl-react bx-skill'></i>
            React JS
          </li>
          <li className='skill_list'>
            <i className='bx bxl-redux bx-skill'></i>
            Redux
          </li>
          <li className='skill_list'>
          <i className='bx bxl-nodejs bx-skill'></i>
            Node JS
          </li>
          <li className='skill_list'>
            <i className='bx bxl-postgresql bx-skill'></i>
              PostgresSQL
          </li>
          <li className='skill_list'>
            <i className='bx bxl-github bx-skill'></i>
            Git
          </li>
        </ul>
    </div>
  )
}

export default Skills