export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with modern web technologies.',
      icon: '🌐',
      links: { project: '#', github: '#' }
    },
    {
      title: 'Mobile App UI',
      description: 'A comprehensive mobile application UI/UX design created in Figma, featuring modern design principles, intuitive user flows, and responsive layouts for optimal mobile experience.',
      icon: '📱',
      links: { project: 'https://www.figma.com/proto/wYA2yk2NQ2BYSDIGGHhBXR/Untitled?node-id=0-1&t=q3VHyq1HbwDT92bZ-1', design: 'https://www.figma.com/design/wYA2yk2NQ2BYSDIGGHhBXR/Untitled?node-id=0-1&t=q3VHyq1HbwDT92bZ-1' }
    },
    {
      title: 'E-commerce Site',
      description: 'A modern e-commerce website with responsive design and user-friendly interface.',
      icon: '🛍️',
      links: { project: '#', github: '#' }
    },
    {
      title: 'Game Development',
      description: 'A simple game developed using C++ with interactive gameplay features.',
      icon: '🎮',
      links: { project: '#', github: '#' }
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="placeholder-image">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.links.project} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                  <a href={project.links.github || project.links.design} className="project-link" target="_blank" rel="noopener noreferrer">
                    {project.links.github ? 'GitHub' : 'Design'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}