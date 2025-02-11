import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Vue.js", icon: "devicon-vuejs-plain colored" }
    ],
    "Backend": [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
    ],
    "Herramientas": [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ]
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mis Habilidades
        </motion.h2>
        
        <div className="skills-container">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div 
              key={category} 
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className={skill.icon}></i>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;