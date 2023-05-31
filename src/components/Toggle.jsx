import React from 'react'
import './styles/toggle.css'

import { themeContext } from '../Context'
import { useContext } from 'react'

const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({type: 'toggle'})
  }

  return (
    <div className='toggle' onClick={handleClick}>
      <i className={darkMode ?"bx bx-moon" :"bx bx-sun"}></i>
    </div>
  )
}

export default Toggle