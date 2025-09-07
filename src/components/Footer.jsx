export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sumina Shrestha</h3>
            <p>UX Designer & Front-End Developer</p>
            <p>Creating clean, user-friendly digital experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><a href="https://sumina-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio Website</a></li>
              <li><a href="https://simpleee-calculator1.netlify.app/" target="_blank" rel="noopener noreferrer">Calculator App</a></li>
              <li><a href="https://www.figma.com/proto/wYA2yk2NQ2BYSDIGGHhBXR/Untitled?node-id=0-1&t=q3VHyq1HbwDT92bZ-1" target="_blank" rel="noopener noreferrer">Mobile App UI</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 9767413657</p>
            <p>📧 suminashrestha1113@gmail.com</p>
            <p>📍 Bhaktapur, Nepal</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sumina Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}