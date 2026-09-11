import { Layout, Cpu, Code2 } from 'lucide-react';
import { PROFILE } from '../config/data';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-grid">
        <div className="about-visual scale-up">
          <div className="pinterest-grid">
            <div className="pinterest-item item-1">
              <div className="visual-card-box card-ui">
                <Layout className="card-icon cyan" size={28} />
                <span className="img-label">FULL-STACK &amp; UI</span>
                <p className="card-subtext">React, TypeScript &amp; High-Fidelity Design</p>
              </div>
            </div>
            <div className="pinterest-item item-2">
              <div className="visual-card-box card-iot">
                <Cpu className="card-icon green" size={28} />
                <span className="img-label">IOT &amp; EMBEDDED</span>
                <p className="card-subtext">ESP8266, Sensors &amp; Real-time Telemetry</p>
              </div>
            </div>
            <div className="pinterest-item item-3">
              <div className="visual-card-box card-code">
                <Code2 className="card-icon purple" size={28} />
                <span className="img-label">SYSTEMS &amp; DB</span>
                <p className="card-subtext">Node.js, PostgreSQL &amp; Docker Pipelines</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 id="about-heading" className="section-title reveal-text">
            WHO IS / {PROFILE.name.split(' ')[0]}?
          </h2>
          <div className="about-description reveal-text">
            <p className="resume-intro">
              I build full-stack applications and take them from interface to API, database, deployment, and the problems that appear after launch.
            </p>
            <p>
              Graduated with a B.Tech in Electronics and Communication Engineering from ABES Engineering College, I split my focus between web infrastructure and hardware telemetry.
            </p>
            <p>
              My work ranges from engineering production-oriented enterprise platforms like the <strong>THEIAKSHI ONE</strong> HRMS to wiring physical microcontrollers for IoT telemetry networks. I prioritize functional architecture, robust APIs, and relational data integrity over buzzwords.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
