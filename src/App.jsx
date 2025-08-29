
import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Contact form handler
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Sumina Shrestha</h1>
          
          {/* Mobile menu button */}
          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About Me</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Welcome to my portfolio</h1>
              <p className="hero-description">
                Hi, I'm Sumina Shrestha. Here you can find my CV and more information about me.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Download CV</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina Shrestha" className="profile-photo" />
            </div>
            <div className="about-text">
              <h2 className="section-title">Hello everyone, I'm a Developer</h2>
              <div className="about-details">
                <p><strong>Name:</strong> Sumina Shrestha</p>
                <p><strong>Qualification:</strong> 10 SEE pass with GPA 3.17</p>
                <p><strong>Education:</strong> Currently studying at Adarsha Secondary School, Sanothimi, Bhaktapur</p>
                <p className="about-description">
                  I am passionate about technology and programming. I enjoy creating websites and learning new technologies. 
                  My goal is to become a skilled developer and contribute to innovative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Figma</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📝</div>
              <h3>HTML</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>CSS</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>JavaScript</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Bootstrap</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>Git</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📰</div>
              <h3>WordPress</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>C/C++</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☕</div>
              <h3>Java</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔷</div>
              <h3>C#</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🌐</div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>A responsive personal portfolio website built with modern web technologies.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">📱</div>
              </div>
              <div className="project-content">
                <h3>Mobile App UI</h3>
                <p>User interface design for a mobile application using Figma.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">Design</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🛍️</div>
              </div>
              <div className="project-content">
                <h3>E-commerce Site</h3>
                <p>A modern e-commerce website with responsive design and user-friendly interface.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🎮</div>
              </div>
              <div className="project-content">
                <h3>Game Development</h3>
                <p>A simple game developed using C++ with interactive gameplay features.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-photo">
                <img src="/attached_assets/20250612_132937_1756450641704.jpg" alt="Sumina Shrestha" className="contact-profile-photo" />
              </div>
              <div className="contact-details">
                <p>📧 suminashrestha1113@gmail.com</p>
                <div className="social-links">
                  <a href="#" className="social-link facebook">📘 Facebook</a>
                  <a href="#" className="social-link instagram">📷 Instagram</a>
                  <a href="#" className="social-link github">💻 GitHub</a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
