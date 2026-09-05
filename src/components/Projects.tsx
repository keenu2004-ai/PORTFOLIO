import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import solarSvg from '../assets/projects/solar-iot.svg';
import fitzoneSvg from '../assets/projects/fitzone-gym.svg';
import phonepeSvg from '../assets/projects/phonepe-clone.svg';
import ardumistSvg from '../assets/projects/ardumist-iot.svg';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'SOLAR DEFECT DETECTION',
      category: 'IoT / EMBEDDED TELEMETRY',
      description:
        'Real-time fault monitoring & telemetry system for PV solar arrays using ESP8266 microcontrollers and threshold sensing algorithms.',
      tech: ['ESP8266', 'C++', 'Analog Sensing', 'Wi-Fi Telemetry'],
      color: '#ff9800',
      github: 'https://github.com/x-vaibhav/solar-defect-detection',
      image: solarSvg,
      imageAlt: 'Solar PV Defect Detection IoT Circuit Telemetry Diagram',
    },
    {
      id: '02',
      title: 'FITZONE GYM SYSTEM',
      category: 'FULL-STACK SOFTWARE',
      description:
        'Comprehensive gym membership management platform with interactive class scheduling, user bookings, and administrative control panels.',
      tech: ['React', 'PostgreSQL', 'Node.js', 'Express API'],
      color: '#ff0055',
      github: 'https://github.com/x-vaibhav/fitzone-gym',
      image: fitzoneSvg,
      imageAlt: 'Fitzone Gym Management Dashboard Interface Screenshot',
    },
    {
      id: '03',
      title: 'PHONEPE UI CLONE',
      category: 'FRONTEND PRECISION',
      description:
        'High-fidelity pixel-perfect React replica of the PhonePe mobile payment landing platform, focused on interface precision and layout integrity.',
      tech: ['React', 'TypeScript', 'CSS3 Layout', 'Vite'],
      color: '#a855f7',
      github: 'https://github.com/x-vaibhav/phonepe-clone',
      image: phonepeSvg,
      imageAlt: 'PhonePe UI Mobile Landing Page Clone Replica Interface',
    },
    {
      id: '04',
      title: 'ARDUMIST HACKATHON NODE',
      category: 'HARDWARE / INNOVATION',
      description:
        'Automated greenhouse micro-climate misting control system engineered under strict 24-hour hackathon constraints with Arduino boards.',
      tech: ['Arduino C++', 'DHT Sensors', 'Micro-Relays'],
      color: '#22c55e',
      github: 'https://github.com/x-vaibhav',
      image: ardumistSvg,
      imageAlt: 'ArduMist Smart Microcontroller Prototype Wiring Layout',
    },
  ];

  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="section-header-wrap">
        <span className="section-tag">04 / Portfolio Highlights</span>
        <h2 id="projects-heading" className="section-title reveal-text">
          Selected Engineering Works
        </h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-feature">
            <div className="project-info scale-up">
              <span className="project-number">{project.id}</span>
              <p className="project-cat">{project.category}</p>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <GithubIcon size={16} /> Repository <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="project-visual scale-up">
              <div
                className="visual-box"
                style={{ backgroundColor: project.color + '10', borderColor: project.color + '40' }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-img-preview"
                    loading="lazy"
                  />
                ) : (
                  <div className="floating-title" style={{ color: project.color }}>
                    {project.id}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
