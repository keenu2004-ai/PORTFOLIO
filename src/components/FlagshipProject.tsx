import { useState } from 'react';
import { Layers, Server, Database, Container, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import hrmsSvg from '../assets/projects/theiakshi-hrms.svg';
import { PROJECTS } from '../config/data';
import './FlagshipProject.css';

const FlagshipProject = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'engineering'>('preview');
  
  const project = PROJECTS.find(p => p.id === 'theiakshi-one');

  if (!project) return null;

  const modules = [
    {
      title: 'Decoupled Identity & RBAC',
      desc: 'USER != EMPLOYEE != ROLE identity separation. Organization-level data isolation and granular backend authorization checks.',
    },
    {
      title: 'Attendance & Geofencing',
      desc: 'Location-aware punch-in/out with latitude/longitude validation, shift tracking, and robust regularization workflows.',
    },
    {
      title: 'Security & Authentication',
      desc: 'HTTP-only cookies, JWT auth without localStorage exposure, BOLA/IDOR mitigation, and Microsoft SSO with JWKS validation.',
    },
    {
      title: 'Robust Backend Engineering',
      desc: 'Modular Express routes, parameterized SQL repositories, transactional PostgreSQL helpers, and centralized API client.',
    },
    {
      title: 'DevOps & Deployment',
      desc: 'Dockerized environments, CI/CD pipelines, robust database migrations, and Render deployment configurations.',
    }
  ];

  return (
    <section id="flagship" className="flagship">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Flagship Showcase</span>
          <h2 className="section-title">{project.title}</h2>
          <p className="section-subtitle">
            {project.description}
          </p>
        </div>

        <div className="flagship-card">
          <div className="flagship-banner">
            <div className="flagship-title-group">
              <span className="flagship-badge">{project.status.toUpperCase()}</span>
              <h3 className="flagship-name">Theiakshi-One Platform</h3>
            </div>
            <div className="flagship-actions">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm"
                >
                  <GithubIcon size={16} /> Repository
                </a>
              )}
            </div>
          </div>

          <div className="flagship-nav-tabs">
            <button
              className={`tab-link ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              System UI Preview
            </button>
            <button
              className={`tab-link ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              System Architecture
            </button>
            <button
              className={`tab-link ${activeTab === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveTab('engineering')}
            >
              Engineering Depth
            </button>
          </div>

          <div className="flagship-content">
            {activeTab === 'preview' && (
              <div className="flagship-preview-view">
                <div className="image-frame">
                  <img
                    src={hrmsSvg}
                    alt="Theiakshi HRMS Dashboard Interface Architecture"
                    className="hrms-img"
                  />
                </div>
                <div className="preview-caption">
                  <div className="caption-text">
                    <h4>Implementation Overview</h4>
                    <p>{project.implementation}</p>
                    <p style={{marginTop: '10px'}}>{project.purpose}</p>
                  </div>
                  <div className="caption-stack">
                    {project.technologies.slice(0, 5).map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="flagship-arch-view">
                <div className="arch-flow">
                  <div className="arch-step">
                    <div className="arch-icon cyan"><Layers size={22} /></div>
                    <span className="arch-layer">FRONTEND LAYER</span>
                    <span className="arch-tech">React + Vite + Tailwind</span>
                    <p>Role-aware dashboards, API-driven workflows, and strict permission-based UI rendering.</p>
                  </div>

                  <div className="arch-arrow"><ArrowRight size={20} /></div>

                  <div className="arch-step">
                    <div className="arch-icon purple"><Server size={22} /></div>
                    <span className="arch-layer">BACKEND LAYER</span>
                    <span className="arch-tech">Node.js + Express (TS)</span>
                    <p>Centralized auth, strict CORS, rate-limiting, and comprehensive REST API endpoints.</p>
                  </div>

                  <div className="arch-arrow"><ArrowRight size={20} /></div>

                  <div className="arch-step">
                    <div className="arch-icon green"><Database size={22} /></div>
                    <span className="arch-layer">DATABASE LAYER</span>
                    <span className="arch-tech">PostgreSQL DB</span>
                    <p>35-table relational schema, tenant isolation, and strict referential integrity.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'engineering' && (
              <div className="flagship-modules-view">
                <div className="modules-grid">
                  {modules.map((mod, idx) => (
                    <div key={idx} className="module-item">
                      <div className="module-header">
                        <CheckCircle2 size={18} className="check-icon" />
                        <h4>{mod.title}</h4>
                      </div>
                      <p>{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flagship-footer-bar">
            <div className="foot-spec">
              <Shield size={16} className="cyan" />
              <span>HTTP-Only JWT &amp; Security Hardened</span>
            </div>
            <div className="foot-spec">
              <Database size={16} className="green" />
              <span>PostgreSQL (35+ Tables)</span>
            </div>
            <div className="foot-spec">
              <Container size={16} className="orange" />
              <span>Docker &amp; CI/CD Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
