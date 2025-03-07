import { PROJECTS } from "../constants";
import { PROJECTS_TITLE } from "../constants";
import { motion } from "framer-motion";

const Projects = ({language}) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">{PROJECTS_TITLE.ptitle[language]}</motion.h2>
    <div>
    {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/4">

            <a href={project.link} rel="noopener noreferrer"><img src={project.image} width={150} height={150} alt="{project.title}" className="flex mb-6 rounded" /></a>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-500">{project.description[language]}</p>
            {project.technologies.map((tech, index) => (
                <span className="text-purple-900 mr-2 bg-neutral-900 px-2 py-1 rounded font-small font-medium" key={index}>
                    {tech}
                </span>
            )
        
        
        )}
            </motion.div>
        </div>
    ))}
    </div>
    
    </div>



  )
}

export default Projects