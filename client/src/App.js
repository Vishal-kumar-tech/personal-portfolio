import './styles/global.css';

import About from './components/about'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from './components/footer'
import AOS from "aos";
import "aos/dist/aos.css"

import { useState, useEffect } from 'react';


function App(){
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (

<div
  className={darkMode ? "dark" : "light"}
  style={{
    backgroundColor: darkMode ? "#0f172a" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    transition: "0.4s",
    overflowX: "hidden"
  }}
> 

    <Navbar
    darkMode = {darkMode} 
    setDarkMode = {setDarkMode}
    />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App;