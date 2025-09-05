export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina Shrestha" className="hero-photo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">✨ Welcome to My Digital Universe ✨</h1>
            <h2 className="hero-subtitle">I'm Sumina Shrestha</h2>
            <div className="hero-badges">
              <span className="badge">💻 Developer</span>
              <span className="badge">🎨 Designer</span>
              <span className="badge">✨ Innovator</span>
            </div>
            <p className="hero-description">
              🚀 A passionate developer and creative mind who transforms ideas into stunning digital experiences. 
              Dive into my world of innovation, creativity, and cutting-edge technology!
            </p>
            <div className="hero-buttons">
              <a href="/cv.pdf" download className="btn btn-primary">Download CV</a>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}