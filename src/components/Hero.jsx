import hero from "../assets/hero.jpg";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    // Wait a small moment to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        // Fallback: try using hash navigation
        window.location.hash = `#${sectionId}`
      }
    }, 100)
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src={hero} alt="Sumina Shrestha" className="hero-photo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Sumina Shrestha</h1>
            <h2 className="hero-subtitle">UX Designer & Front-End Developer</h2>
            <p className="hero-description">
              I'm focused on creating clean, user-friendly digital experiences. I help brands turn complex problems into elegant solutions through design and code. Check out some of my recent work below or get in touch to collaborate.
            </p>
            <div className="hero-buttons">
              <a href="/Sumina_CV.pdf" download="Sumina_Shrestha_CV.pdf" className="btn btn-primary">Download CV</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}