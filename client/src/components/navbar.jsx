import '../styles/navbar.css';
import {FaMoon, FaSun, FaBars} from "react-icons/fa"
import { useState } from 'react';

function Navbar({darkMode, setDarkMode}){

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        
        <nav>
            <h2>Vishal Kumar</h2>

            <ul className={menuOpen ? "active" : ""}>
                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#contact">Contact</a></li>

            </ul>

            <div 
            className='menu-icon' 
            onClick={() => setMenuOpen(!menuOpen)}>

                <FaBars />
                
            </div>

<button className='theme-btn' onClick={() => setDarkMode(!darkMode)}>
{darkMode ? <FaSun /> : <FaMoon />}
</button>

        </nav>
    );
}
export default Navbar;