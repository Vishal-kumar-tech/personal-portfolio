import '../styles/projects.css';

function Projects(){

    const Projects = [
        {
            title: "AI Resume Analyzer",
            desc: "AI based resume analysis project.",
            image: "/projects/AIresume.png",
            github: "https://github.com/Vishal-kumar-tech"
        },

        {
            title: "Expense Tracker(Spendlog)",
            desc: "Track income and expenses with clean UI.",
            image:"projects/spendlog.png",
            github: "https://github.com/Vishal-kumar-tech"
        },

        {
            title: "Weather App",
            desc: "Weather forecast app using API",
            image:"projects/weather.png",
            github: "https://github.com/Vishal-kumar-tech"
        },

        {
            title: "job Portal",
            desc: "Full Stack job portal project",
            github: "https://github.com/Vishal-kumar-tech",
            live: "#"
        }
    ];

    return (
        <section className='projects' id='projects' data-aos="fade-right">

            <h2>Projects</h2>

            <div className='projects-container'>

                {Projects.map((project, index) => (
                    <div className='project-card' key={index}>

                    <img
                       src={project.image}
                       alt={project.title}
                       className="project-image"
                    />

                        <h3>{project.title}</h3>

                        <p>{project.desc}</p>

                        <div className="project-buttons">

                            <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        >

                            <button>
                                Github
                            </button>
                        </a>

                        <a 
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        >

                            <button>
                                Live Demo
                            </button>
                        </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;