import './Contact.css';
import { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Aquí puedes agregar la lógica para enviar el correo
    // Por ejemplo, usando emailjs o tu backend
    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>¡Hablemos!</h3>
            <p>
              Estoy interesado en oportunidades freelance y proyectos interesantes.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>luisdanielcarrillosalas@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+58 424 512 0985</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Lara, Venezuela</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/LuisDCarrillo" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/luis-carrillo-a40533269/" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn ${status === 'sending' ? 'sending' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {status === 'success' && (
              <div className="form-status success">
                ¡Mensaje enviado con éxito!
              </div>
            )}
            
            {status === 'error' && (
              <div className="form-status error">
                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;