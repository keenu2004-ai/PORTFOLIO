import { Star, GitFork, ExternalLink, Code, Database, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './GithubSection.css';

const GithubSection = () => {
  const repositories = [
    {
      name: 'Theiakshi-One',
      desc: 'Enterprise Human Resource & Attendance Management System with PostgreSQL database and RBAC permissions.',
      language: 'TypeScript / React',
      langColor: '#3178c6',
      stars: '4',
      forks: '1',
      url: 'https://github.com/x-vaibhav/Theiakshi-One',
    },
    {
      name: 'fitzone-gym',
      desc: 'Full-stack gym membership management software with class scheduling and admin dashboard.',
      language: 'JavaScript / Node',
      langColor: '#f1e05a',
      stars: '3',
      forks: '0',
      url: 'https://github.com/x-vaibhav/fitzone-gym',
    },
    {
      name: 'solar-defect-detection',
      desc: 'IoT real-time fault monitoring system for solar PV panels using ESP8266 and sensors.',
      language: 'C++ / Embedded',
      langColor: '#f34b7d',
      stars: '5',
      forks: '2',
      url: 'https://github.com/x-vaibhav/solar-defect-detection',
    },
    {
      name: 'phonepe-clone',
      desc: 'High-fidelity pixel-perfect React replica of the PhonePe mobile payment platform interface.',
      language: 'TypeScript / CSS',
      langColor: '#3178c6',
      stars: '2',
      forks: '0',
      url: 'https://github.com/x-vaibhav/phonepe-clone',
    },
  ];

  return (
    <section id="github" className="github-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">08 / Open Source &amp; Code Repositories</span>
          <h2 className="section-title">GitHub Code Showcase</h2>
          <p className="section-subtitle">
            Verified repository highlights demonstrating full-stack web applications, IoT system firmwares, and UI components.
          </p>
        </div>

        <div className="github-grid">
          {/* Left Profile Summary Card */}
          <div className="github-profile-card">
            <div className="profile-header">
              <div className="github-avatar">
                <GithubIcon size={32} />
              </div>
              <div className="profile-info">
                <h3>Vaibhav</h3>
                <a
                  href="https://github.com/x-vaibhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-handle"
                >
                  @x-vaibhav <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <p className="profile-bio">
              Full-Stack Software Developer &amp; B.Tech ECE Student. Building enterprise web platforms, IoT systems, and clean UI components.
            </p>

            <div className="profile-stats">
              <div className="p-stat">
                <Code size={16} className="cyan" />
                <span>React &amp; Node.js</span>
              </div>
              <div className="p-stat">
                <Database size={16} className="purple" />
                <span>PostgreSQL DB</span>
              </div>
              <div className="p-stat">
                <Cpu size={16} className="green" />
                <span>IoT &amp; Embedded C++</span>
              </div>
            </div>

            <a
              href="https://github.com/x-vaibhav"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <GithubIcon size={18} /> Visit GitHub Profile
            </a>
          </div>

          {/* Right Repositories Cards Grid */}
          <div className="repos-grid">
            {repositories.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-header">
                  <span className="repo-name">{repo.name}</span>
                  <ExternalLink size={16} className="repo-ext" />
                </div>
                <p className="repo-desc">{repo.desc}</p>
                <div className="repo-meta">
                  <div className="repo-lang">
                    <span className="lang-dot" style={{ backgroundColor: repo.langColor }}></span>
                    <span>{repo.language}</span>
                  </div>
                  <div className="repo-counters">
                    <span><Star size={14} /> {repo.stars}</span>
                    <span><GitFork size={14} /> {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
