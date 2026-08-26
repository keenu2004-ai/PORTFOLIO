import { useEffect } from 'react';
import './ProjectModal.css';

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: string;
  image: string;
  github: string;
  liveDemo?: string;
  isEducational?: boolean;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
          ✕
        </button>

        <div className="modal-header">
          <span className="modal-number">{project.id}</span>
          <span className="modal-category">{project.category}</span>
          <h2 id="modal-title" className="modal-title">{project.title}</h2>
          {project.isEducational && (
            <div className="educational-badge">UNOFFICIAL EDUCATIONAL RECREATION</div>
          )}
        </div>

        <div className="modal-image-container">
          <img src={project.image} alt={`${project.title} architecture mockup`} className="modal-image" />
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="modal-grid">
            <div className="modal-section">
              <h3>The Engineering Challenge</h3>
              <p>{project.problem}</p>
            </div>
            <div className="modal-section">
              <h3>Architecture &amp; Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="modal-features">
              {project.features.map((feat, i) => (
                <li key={i}>
                  <span className="feature-bullet" style={{ color: project.color }}>◆</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>System Architecture Highlights</h3>
            <p className="architecture-text">{project.architecture}</p>
          </div>

          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="modal-tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="modal-tech-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn github"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              VIEW GITHUB REPOSITORY
            </a>
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-btn live"
              >
                LIVE DEMO ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
