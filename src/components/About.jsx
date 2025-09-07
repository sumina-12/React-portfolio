export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/attached_assets/20250612_134619_1756450641705.jpg" alt="Sumina Shrestha" className="profile-photo" />
              <div className="image-overlay">
                <div className="overlay-text">Hello! 👋</div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="about-intro">
              <h3 className="about-greeting">Hello everyone, I'm a Developer 💻</h3>
              <p className="about-tagline">Passionate about creating beautiful and functional digital experiences</p>
            </div>
            
            <div className="about-details">
              <div className="detail-card">
                <div className="detail-icon">👤</div>
                <div className="detail-content">
                  <h4>Name</h4>
                  <p>Sumina Shrestha</p>
                </div>
              </div>
              
              <div className="detail-card">
                <div className="detail-icon">🎓</div>
                <div className="detail-content">
                  <h4>Education</h4>
                  <p>Diploma in Computer Engineering</p>
                  <span className="detail-sub">Currently studying</span>
                </div>
              </div>
              
              <div className="detail-card">
                <div className="detail-icon">🏫</div>
                <div className="detail-content">
                  <h4>Institution</h4>
                  <p>Adarsha Secondary School</p>
                  <span className="detail-sub">Sanothimi, Bhaktapur</span>
                </div>
              </div>
              
              <div className="detail-card">
                <div className="detail-icon">📊</div>
                <div className="detail-content">
                  <h4>Previous Qualification</h4>
                  <p>SEE Graduate</p>
                  <span className="detail-sub">GPA: 3.17</span>
                </div>
              </div>
            </div>
            
            <div className="about-description">
              <p>
                I am a passionate technology enthusiast currently pursuing my diploma in Computer Engineering. 
                I love creating innovative digital solutions and exploring the endless possibilities that technology offers. 
                My journey in programming has been incredibly rewarding, and I'm constantly learning new technologies 
                to enhance my skills.
              </p>
              <p>
                My goal is to become a skilled full-stack developer and contribute to meaningful projects that 
                make a positive impact. I believe in the power of clean code, beautiful design, and user-centered development.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-text">Years Learning</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Technologies</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}