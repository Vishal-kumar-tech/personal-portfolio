import '../styles/skills.css'
import{
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,

}from "react-icons/fa"

import {SiMongodb} from "react-icons/si"
import {SiExpress} from "react-icons/si"

function Skills(){
    const skills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Javascript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "MongoDB", icon: <SiMongodb /> },
       { name: "Express.js", icon: <SiExpress/> },
        { name: "Node.js", icon: <FaNodeJs/> },
       { name: "Excel", icon: "📊" }
    ];

    return(

        <section className='skills' id='skills' data-aos="zoom-in">
         
         <h2>My Skills</h2>

         <div className='skills-container'>
             
             {skills.map((skill, index) => (
                <div className='skill-card' key={index}>
                    <div className='skill-icon'>
                        {skill.icon}

                    </div>

                    <h3>{skill.name}</h3>

                </div>
             ))}

         </div>

        </section>
    )
}

export default Skills;