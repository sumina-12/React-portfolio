import { useState, useEffect } from 'react'
import CVModal from './CVModal'

export default function Hero() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  const roles = ['Computer Engineering Student', 'Front-End Developer', 'UX Designer', 'Problem Solver']

  useEffect(() => {
    const currentRole = roles[currentWordIndex]
    const shouldDelete = isDeleting
    const speed = shouldDelete ? 50 : 100

    const timer = setTimeout(() => {
      if (!shouldDelete && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }

      if (shouldDelete && displayedText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % roles.length)
        return
      }

      const nextText = shouldDelete
        ? currentRole.substring(0, displayedText.length - 1)
        : currentRole.substring(0, displayedText.length + 1)

      setDisplayedText(nextText)
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex, roles])

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
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-decoration">
              <div className="decoration-ring"></div>
              <div className="decoration-dots"></div>
            </div>
            <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina Shrestha" className="hero-photo" />
            <div className="hero-badges">
              <div className="badge">💻 Diploma in Computer Engineering</div>
              <div className="badge">🎨 Creative Developer</div>
              <div className="badge">🌟 Innovation Enthusiast</div>
            </div>
          </div>
          
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              Sumina Shrestha
              <span className="title-decoration">✨</span>
            </h1>
            
            <div className="hero-typing">
              <span className="typing-prefix">I'm a </span>
              <span className="typed-text">{displayedText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate about creating beautiful, functional digital experiences. I blend creativity 
              with technical skills to build solutions that make a difference. Currently pursuing my 
              diploma in Computer Engineering while working on exciting projects that push the 
              boundaries of what's possible.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={openCVModal}>
                <span>📄</span>
                View My CV
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                <span>🚀</span>
                View Projects
              </button>
              <button className="btn btn-tertiary" onClick={() => scrollToSection('contact')}>
                <span>💬</span>
                Let's Chat
              </button>
            </div>
            
            <div className="hero-social-preview">
              <span className="social-text">Connect with me:</span>
              <div className="social-icons-mini">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-mini">
                  <span>⚡</span>
                </a>
                <a href="mailto:suminashrestha1113@gmail.com" className="social-mini">
                  <span>📧</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-mini">
                  <span>📸</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </section>
  )
}