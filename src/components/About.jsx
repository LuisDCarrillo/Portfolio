import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador web apasionado por crear experiencias digitales
              únicas y atractivas. Con experiencia en React, JavaScript y diseño UI/UX,
              me especializo en construir aplicaciones web modernas y responsivas.
            </p>
            <p>
              Mi objetivo es combinar diseño elegante con funcionalidad robusta
              para crear soluciones que impacten positivamente a los usuarios.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">1+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;