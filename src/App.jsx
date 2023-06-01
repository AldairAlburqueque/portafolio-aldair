import './App.css'
import Header from './components/Header'
import { Portafolio } from './components/Portafolio'
import Skills from './components/Skills'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { themeContext } from './Context'
import { useContext } from 'react'
import Contact from './components/Contact'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background : darkMode? '' : '#232741',
        color : darkMode? 'black' : 'white',
      }}
    > 
      <Header />
      <Home />
      <About/>
      <Skills />
      <Portafolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
