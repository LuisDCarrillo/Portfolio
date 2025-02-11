import { motion } from 'framer-motion';
import './Hero.css';
import { fadeIn } from '../utils/animations';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.h1 
          className="hero-title"
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
        >
          Hola, soy <span className="accent">Luis</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Desarrollador Frontend & Diseñador UI/UX
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <button className="btn">Ver Proyectos</button>
          <button className="btn btn-outline">Contactar</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;