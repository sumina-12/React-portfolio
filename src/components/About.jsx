import about from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={about} alt="Sumina Shrestha" className="profile-photo" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
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
  )
}