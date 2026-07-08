import '../styles/hero.css';
import {motion} from "framer-motion"
import {Typewriter} from 'react-simple-typewriter'

import {
    FaGithub,
    FaLinkedin,
    FaDownload
} from "react-icons/fa";

function Hero(){
    return(

        <motion.section
        className='hero'
         id='home'
         initial={{opacity: 0, y:80 }}
         animate={{opacity: 1, y:0 }}
         transition={{duration: 1}}>

            <img src="/profile.jpeg" alt="profile" />

            <h1>Hi, I'm Vishal Kumar</h1>
            <h3>
                <Typewriter 
                words={[
                    'Aspiring MERN Stack Developer',
                    'Frontend Developer',
                    'React Learner'
                ]}
                
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                ></Typewriter>

            </h3>

            <div className='social-icons'>

                <a 
                href="https://github.com/Vishal-kumar-tech"
                target="_blank"
                rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                 href="https://www.linkedin.com/in/vishal-kumar-445167259"
                 target='_blank'
                 rel='noreferrer'
                >
                    <FaLinkedin />
                </a>
            </div>

            <p>Passionate about building modern full stack web applications.</p>

           <div className="hero-buttons">

            <a href="/my_resume.pdf" download>
           
           <button>
            
            <FaDownload />
            Download Resume 
            </button>
            </a>

            <a href="#contact">
           <button>
            Contact Me 
            </button>
            </a>

           </div>
        </motion.section>
    )
}

export default Hero;