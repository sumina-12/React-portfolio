export default function Skills() {
  const skills = [
    { name: 'Figma', icon: '🎨', progress: 85 },
    { name: 'HTML', icon: '📝', progress: 90 },
    { name: 'CSS', icon: '🎨', progress: 85 },
    { name: 'JavaScript', icon: '⚡', progress: 75 },
    { name: 'Bootstrap', icon: '📱', progress: 80 },
    { name: 'Git', icon: '🔧', progress: 70 },
    { name: 'WordPress', icon: '📰', progress: 75 },
    { name: 'C/C++', icon: '💻', progress: 70 },
    { name: 'Java', icon: '☕', progress: 65 },
    { name: 'React', icon: '⚛️', progress: 80 },
    { name: 'Node.js', icon: '🟢', progress: 70 }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar" style={{width: `${skill.progress}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}