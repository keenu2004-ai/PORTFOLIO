import { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../config/data';
import type { Project } from '../config/data';
import './Projects.css';

// SVG imports - mapping these directly for simplicity since data.ts shouldn't contain React components
import solarSvg from '../assets/projects/solar-iot.svg';
import fitzoneSvg from '../assets/projects/fitzone-gym.svg';
import phonepeSvg from '../assets/projects/phonepe-clone.svg';
import ardumistSvg from '../assets/projects/ardumist-iot.svg';
import portfolioSvg from '../assets/projects/phonepe-clone.svg'; // Reuse or add portfolio svg if needed

const imageMap: Record<string, string> = {
  'solar-defect': solarSvg,
  'fitzone': fitzoneSvg,
  'phonepe-clone': phonepeSvg,
  'ardumist': ardumistSvg,
  'portfolio': portfolioSvg
};

const colorMap: Record<string, string> = {
  'solar-defect': '#ff9800',
  'fitzone': '#ff0055',
  'phonepe-clone': '#a855f7',
  'ardumist': '#22c55e',
  'portfolio': '#00f0ff'
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter out the flagship (theiakshi-one) and only show featured projects
  const displayProjects = PROJECTS.filter(p => p.id !== 'theiakshi-one');

  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="section-header-wrap">
        <span className="section-tag">04 / Portfolio Highlights</span>
        <h2 id="projects-heading" className="section-title reveal-text">
          Selected Engineering Works
        </h2>
      </div>

      <div className="projects-container">
        {displayProjects.map((project, index) => {
          const numStr = (index + 1).toString().padStart(2, '0');
          const color = colorMap[project.id] || '#00f0ff';
          const image = imageMap[project.id];
          
          return (
            <div key={project.id} className="project-feature">
              <div className="project-info scale-up">
                <span className="project-number">{numStr}</span>
                <p className="project-cat">{project.category} • {project.status}</p>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                  {project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}
                </div>

                <div className="project-links">
                  <button 
                    className="project-btn" 
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View case study for ${project.title}`}
                  >
                    <Info size={16} /> Case Study
                  </button>
                  
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={16} /> Repository <ExternalLink size={14} />
                    </a>
                  )}
                  
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-visual scale-up">
                <div
                  className="visual-box"
                  style={{ backgroundColor: color + '10', borderColor: color + '40' }}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${project.title} Interface`}
                      className="project-img-preview"
                      loading="lazy"
                    />
                  ) : (
                    <div className="floating-title" style={{ color: color }}>
                      {numStr}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
