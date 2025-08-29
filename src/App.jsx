
import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Amelia</h1>
          
          {/* Mobile menu button */}
          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hey I'm</p>
              <h1 className="hero-name">Amelia</h1>
              <p className="hero-title">I'm a Developer</p>
              <p className="hero-description">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit. Fugit quam 
                commodi quasi molestias perferendis ut accusantium recusant.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Download CV</button>
                <button className="btn btn-secondary">Contact Me</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="photo-circle">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I'm a passionate developer with experience in creating responsive web applications.
            I love working with modern technologies and solving complex problems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <p>Node.js, Python, Express</p>
            </div>
            <div className="skill-item">
              <h3>Tools</h3>
              <p>Git, VS Code, Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your third project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-text">
            Let's get in touch! Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <div className="contact-info">
            <p>📧 amelia@example.com</p>
            <p>📱 +1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  )
}
