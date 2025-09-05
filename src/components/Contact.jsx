export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
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
  )
}