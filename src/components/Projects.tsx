import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'CREATIVE VISUAL PORTFOLIO',
      category: 'DESIGN / FRONTEND',
      description: 'A high-impact, cinematic portfolio featuring massive typography, custom magnetic cursors, and sensory-driven animations.',
      tech: ['React', 'TypeScript', 'Advanced CSS', 'Vite'],
      color: '#00f0ff'
    },
    {
      id: '02',
      title: 'SOLAR DEFECT DETECTION',
      category: 'IoT / EMBEDDED',
      description: 'Real-time fault monitoring system for PV panels using ESP8266 and intelligent threshold logic.',
      tech: ['ESP8266', 'DHT11', 'Analog Sensing'],
      color: '#ff9800'
    },
    {
      id: '03',
      title: 'FITZONE GYM SYSTEM',
      category: 'FULL-STACK',
      description: 'Comprehensive gym membership platform with admin dashboards and class booking systems.',
      tech: ['React', 'PostgreSQL', 'Node.js'],
      color: '#ff0055'
    },
    {
      id: '04',
      title: 'PHONEPE UI CLONE',
      category: 'FRONTEND',
      description: 'High-fidelity pixel-perfect replica of the PhonePe landing page, focused on design precision.',
      tech: ['HTML5', 'CSS3', 'Layout'],
      color: '#673ab7'
    },
    {
      id: '05',
      title: 'ARDUMIST HACKATHON',
      category: 'HARDWARE / INNOVATION',
      description: 'Smart automated solution built during a 24-hour hackathon using Arduino microcontrollers.',
      tech: ['Arduino', 'C++', 'Sensors'],
      color: '#4caf50'
    },
    {
      id: '06',
      title: 'MODERN RESTAURANT',
      category: 'UI/UX',
      description: 'Immersive multi-page experience for a food business with responsive navigation and menus.',
      tech: ['JS', 'CSS Animation', 'HTML'],
      color: '#ffffff'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title reveal-text">Selected / Works</h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-feature">
            <div className="project-info scale-up">
              <span className="project-number">{project.id}</span>
              <p className="project-cat">{project.category}</p>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
            
            <div className="project-visual scale-up">
              <div 
                className="visual-box" 
                style={{ backgroundColor: project.color + '10', borderColor: project.color }}
              >
                <div className="inner-glow" style={{ boxShadow: `inset 0 0 100px ${project.color}15` }}></div>
                <div className="floating-title" style={{ color: project.color }}>{project.id}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
