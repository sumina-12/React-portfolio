import { useState } from 'react'
import CVModal from './CVModal'

export default function Hero() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openCVModal = () => {
    setIsCVModalOpen(true)
  }

  const closeCVModal = () => {
    setIsCVModalOpen(false)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina Shrestha" className="hero-photo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Sumina Shrestha</h1>
            <h2 className="hero-subtitle">UX Designer & Front-End Developer</h2>
            <p className="hero-description">
              I'm focused on creating clean, user-friendly digital experiences. I help brands turn complex problems into elegant solutions through design and code. Check out some of my recent work below or get in touch to collaborate.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={openCVModal}>View My CV</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </section>
  )
}