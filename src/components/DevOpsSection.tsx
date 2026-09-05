import { useState } from 'react';
import { Terminal, GitBranch, Container, Server, Database, Lock, ShieldCheck, Cpu } from 'lucide-react';
import './DevOpsSection.css';

const DevOpsSection = () => {
  const [selectedNode, setSelectedNode] = useState<number>(2);

  const pipelineNodes = [
    {
      id: 0,
      title: 'Local Development',
      icon: <Terminal size={22} />,
      badge: 'DEV ENVIRONMENT',
      desc: 'TypeScript source code compilation, Vite HMR, and local PostgreSQL container testing.',
      specs: ['React + Vite App', 'Local Node.js Runtime', 'Git Branch Workflow']
    },
    {
      id: 1,
      title: 'GitHub Repository',
      icon: <GitBranch size={22} />,
      badge: 'VERSION CONTROL',
      desc: 'Version-controlled repository hosting production commits and code reviews.',
      specs: ['Protected Main Branch', 'Clean Commit Logs', 'Repository Workflows']
    },
    {
      id: 2,
      title: 'Docker Containerization',
      icon: <Container size={22} />,
      badge: 'CONTAINER RUNTIME',
      desc: 'Isolated Docker environments bundling Node.js backend dependencies and static build assets.',
      specs: ['Multi-stage Dockerfiles', 'Environment Variable Security', 'Port Mapping 3000:3000']
    },
    {
      id: 3,
      title: 'Nginx Reverse Proxy',
      icon: <Server size={22} />,
      badge: 'REVERSE PROXY & GATEWAY',
      desc: 'High-performance web server routing incoming HTTP requests to Node.js backend services.',
      specs: ['SSL TLS Encryption', 'Gzip Compression', 'Static Asset Caching']
    },
    {
      id: 4,
      title: 'Node.js & PostgreSQL',
      icon: <Database size={22} />,
      badge: 'APP & DATA LAYER',
      desc: 'Express.js application server paired with relational PostgreSQL database instance.',
      specs: ['Connection Pooling', 'Structured Migrations', 'JWT Authentication']
    }
  ];

  return (
    <section id="devops" className="devops">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">07 / Infrastructure &amp; Deployment</span>
          <h2 className="section-title">Deployment &amp; DevOps Pipeline</h2>
          <p className="section-subtitle">
            Visualizing the end-to-end production architecture connecting source code to containerized server infrastructure.
          </p>
        </div>

        <div className="pipeline-wrapper">
          {/* Node Flow Diagram Bar */}
          <div className="nodes-flow-bar">
            {pipelineNodes.map((node) => (
              <div
                key={node.id}
                className={`node-button ${selectedNode === node.id ? 'active' : ''}`}
                onClick={() => setSelectedNode(node.id)}
              >
                <div className="node-icon">{node.icon}</div>
                <span className="node-title">{node.title}</span>
                <span className="node-step">0{node.id + 1}</span>
              </div>
            ))}
          </div>

          {/* Active Node Detail Card */}
          <div className="node-detail-card">
            <div className="detail-header">
              <div className="detail-title-group">
                <span className="detail-badge">{pipelineNodes[selectedNode].badge}</span>
                <h3>{pipelineNodes[selectedNode].title}</h3>
              </div>
              <div className="security-tag">
                <ShieldCheck size={16} className="cyan" />
                <span>Zero Secret Exposure Standard</span>
              </div>
            </div>

            <p className="detail-desc">{pipelineNodes[selectedNode].desc}</p>

            <div className="specs-grid">
              {pipelineNodes[selectedNode].specs.map((spec, i) => (
                <div key={i} className="spec-item">
                  <Lock size={14} className="cyan" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Highlights Row */}
          <div className="infra-highlights">
            <div className="infra-card">
              <Container size={20} className="icon-cyan" />
              <h4>Containerization</h4>
              <p>Applications bundled into isolated containers for uniform execution across dev and production.</p>
            </div>
            <div className="infra-card">
              <Server size={20} className="icon-purple" />
              <h4>Reverse Proxy Gateway</h4>
              <p>Nginx manages HTTP/HTTPS traffic, SSL termination, and static asset distribution efficiently.</p>
            </div>
            <div className="infra-card">
              <Cpu size={20} className="icon-green" />
              <h4>Database Integrity</h4>
              <p>PostgreSQL schema migrations and parameterized SQL queries prevent data corruption and injection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;
