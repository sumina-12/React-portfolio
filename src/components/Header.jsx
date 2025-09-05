import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/attached_assets/portfolio-logo_1757078956553.jpg" alt="Sumina Portfolio Logo" className="logo-image" />
          <h1 className="logo-text">Sumina Shrestha</h1>
        </div>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

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
            <a href="#gallery" className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}