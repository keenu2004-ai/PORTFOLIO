import { useState } from 'react';
import { Layers, Server, Database, Container, Shield, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import hrmsSvg from '../assets/projects/theiakshi-hrms.svg';
import './FlagshipProject.css';

const FlagshipProject = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'modules'>('preview');

  const modules = [
    {
      title: 'Employee Management',
      desc: 'Centralized directory storing employee profiles, department mapping, role assignments, and onboarding workflows.',
    },
    {
      title: 'Biometric & Attendance Engine',
      desc: 'Real-time attendance logging with check-in timestamps, monthly regularizations, and biometric exception tracking.',
    },
    {
      title: 'Leave & Rollover Engine',
      desc: 'Automated leave requests approval system, yearly leave carry-forward/rollovers, and leave quota calculations.',
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Granular permissions differentiating Admin, HR Manager, Department Head, and Employee portal access.',
    },
    {
      title: 'SQL Schema & Migrations',
      desc: 'Structured PostgreSQL schema with migration tracking scripts (v023_rollover.sql) ensuring data integrity.',
    },
  ];

  return (
    <section id="flagship" className="flagship">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Flagship Showcase</span>
          <h2 className="section-title">Theiakshi HRMS</h2>
          <p className="section-subtitle">
            Enterprise-Style Human Resource &amp; Attendance Management System engineered with React, Node.js, Express, and PostgreSQL.
          </p>
        </div>

        <div className="flagship-card">
          {/* Top Banner Bar */}
          <div className="flagship-banner">
            <div className="flagship-title-group">
              <span className="flagship-badge">FLAGSHIP PRODUCTION SYSTEM</span>
              <h3 className="flagship-name">Theiakshi-One Enterprise HRMS</h3>
            </div>
            <div className="flagship-actions">
              <a
                href="https://github.com/x-vaibhav/Theiakshi-One"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <GithubIcon size={16} /> Repository
              </a>
              <a
                href="#contact"
                className="btn-primary btn-sm"
              >
                Request Walkthrough <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Controls Bar */}
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
              className={`tab-link ${activeTab === 'modules' ? 'active' : ''}`}
              onClick={() => setActiveTab('modules')}
            >
              Core Modules
            </button>
          </div>

          {/* Main Content Area */}
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
                    <h4>Production Dashboard View</h4>
                    <p>Live workforce stats, biometric attendance monitoring, and leave regularization workflow.</p>
                  </div>
                  <div className="caption-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
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
                    <span className="arch-tech">React + TypeScript</span>
                    <p>Modular UI components, dashboard widgets, and state management.</p>
                  </div>

                  <div className="arch-arrow"><ArrowRight size={20} /></div>

                  <div className="arch-step">
                    <div className="arch-icon purple"><Server size={22} /></div>
                    <span className="arch-layer">BACKEND LAYER</span>
                    <span className="arch-tech">Node.js + Express</span>
                    <p>RESTful APIs, JWT Auth controllers, and regularization endpoints.</p>
                  </div>

                  <div className="arch-arrow"><ArrowRight size={20} /></div>

                  <div className="arch-step">
                    <div className="arch-icon green"><Database size={22} /></div>
                    <span className="arch-layer">DATABASE LAYER</span>
                    <span className="arch-tech">PostgreSQL DB</span>
                    <p>Relational tables, indexed attendance records, and SQL migrations.</p>
                  </div>

                  <div className="arch-arrow"><ArrowRight size={20} /></div>

                  <div className="arch-step">
                    <div className="arch-icon orange"><Container size={22} /></div>
                    <span className="arch-layer">CONTAINER &amp; PROXY</span>
                    <span className="arch-tech">Docker + Nginx</span>
                    <p>Isolated containers, reverse proxy routing, and static asset serving.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'modules' && (
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

          {/* Footer Details Bar */}
          <div className="flagship-footer-bar">
            <div className="foot-spec">
              <Shield size={16} className="cyan" />
              <span>Role-Based Permissions &amp; Data Integrity</span>
            </div>
            <div className="foot-spec">
              <Database size={16} className="green" />
              <span>PostgreSQL Relational Storage</span>
            </div>
            <div className="foot-spec">
              <Container size={16} className="orange" />
              <span>Containerized Infrastructure Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
