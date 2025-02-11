import './Projects.css';
import{motion} from 'framer-motion';
import {scaleIn, staggerContainer, fadeIn } from '../utils/animations';
const Projects = () => {
  const projects = [
    {
      title: "Awindowtint",
      description: "Una SPA construida con React y posteriormente desplegada en GoDaddy.",
      tags: ["React", "CPanel", "HTML", "CSS", "JavaScript"],
      image: "/proyecto1.png", // Añade tus imágenes en la carpeta public
      link: "https://awindowtint.net/"
    },
    {
      title: "Banco Universitario",
      description: "Pagina web institucional y Banca en linea diseñadas con Figma y posteiormente desarrolladas con React.",
      tags: ["React", "Netlify", "Figma"],
      image: "/proyecto2.png",
      link: "https://banco-universitario.netlify.app/"
    },
    {
      title: "Nombre del Proyecto 3",
      description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, y sincronización en la nube.",
      tags: ["React", "Firebase", "Material-UI"],
      image: "/proyecto3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 className="section-title" variants={fadeIn()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>Mis Proyectos</motion.h2>

        <motion.div className="projects-grid"  
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}> 

          {projects.map((project, index) => (
            <motion.div className="project-card" key={index} variants={scaleIn} whileHover={{ y: -10 }}>
              <div className="project-image">
               <img src={project.image} alt={project.title} />
                <motion.div className="project-overlay" 
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}>
                  <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </a>
                </motion.div>

              </div>
              <motion.div className="project-info" variants={fadeIn()}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Projects;