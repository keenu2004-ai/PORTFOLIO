import { GraduationCap, Code2, Cpu, CheckCircle } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const timelineItems = [
    {
      period: '2023 — PRESENT',
      role: 'Full-Stack Software Developer & Systems Architect',
      institution: 'Independent Projects & Open Source',
      category: 'Software Engineering & Production Builds',
      icon: <Code2 size={20} className="icon-purple" />,
      bullets: [
        'Built and deployed a full-stack enterprise HRMS application (THEIAKSHI ONE) using React, Node.js, and PostgreSQL with reusable frontend components and API-driven workflows.',
        'Designed relational database schemas with 35 tables and automated migration workflows for attendance regularizations.',
        'Engineered business web applications including the FitZone platform with trial booking systems, trainer interfaces, and administrative controls.',
        'Developed high-fidelity, pixel-perfect UI replicas of complex fintech applications (PhonePe UI Clone) using raw CSS and precise responsive grids.'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST APIs']
    },
    {
      period: '2022 — PRESENT (Expected Graduation 2026)',
      role: 'Bachelor of Technology — Electronics & Communication Engineering',
      institution: 'ABES Engineering College',
      category: 'Academic & Engineering Foundation',
      icon: <GraduationCap size={20} className="icon-cyan" />,
      bullets: [
        'Bridging low-level hardware design with high-level software engineering through academic electronics coursework and applied computer science.',
        'Engineered 48-hr hackathon hardware solutions (ArduMist) and embedded sensor nodes.'
      ],
      tech: ['Embedded C++', 'Digital Electronics', 'Sensors']
    },
    {
      period: '2024',
      role: 'IoT Hardware Systems Engineer (Project)',
      institution: 'Academic / Working Prototype',
      category: 'Hardware & Systems Integration',
      icon: <Cpu size={20} className="icon-green" />,
      bullets: [
        'Engineered a real-time solar PV array fault detection circuit with analog sensor inputs, achieving sub-second fault detection.',
        'Programmed embedded C++ on ESP8266 microcontrollers to monitor telemetry and render local JSON-driven dashboards over Wi-Fi.',
        'Prototyped hardware loops integrating DHT11 sensors, I2C LCDs, and relay controls under strict time and resource constraints.'
      ],
      tech: ['ESP8266', 'Arduino IDE', 'C++', 'Wi-Fi Telemetry', 'Circuit Prototyping']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 / Background &amp; Milestones</span>
          <h2 className="section-title">Engineering Experience</h2>
          <p className="section-subtitle">
            A timeline of software development milestones, academic foundation, and hardware engineering projects.
          </p>
        </div>

        <div className="timeline-wrapper">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-badge">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>

              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>

              <ul className="timeline-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="bullet-check" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-tech">
                {item.tech.map((t) => (
                  <span key={t} className="t-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
