import { GraduationCap, Code2, Cpu, CheckCircle } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const timelineItems = [
    {
      period: '2022 — PRESENT (Expected Graduation 2026)',
      role: 'Bachelor of Technology — Electronics & Communication Engineering',
      institution: 'ABES Engineering College',
      category: 'Academic & Engineering Foundation',
      icon: <GraduationCap size={20} className="icon-cyan" />,
      bullets: [
        'Specializing in microcontrollers, signal processing, and low-level hardware-software interfacing.',
        'Engineered 24-hr hackathon hardware solutions (ArduMist) and embedded sensor nodes (Solar Defect Detection).',
        'Bridged academic electronics coursework with full-stack web software development.'
      ],
      tech: ['Embedded C++', 'ESP8266/ESP32', 'Sensors', 'Digital Electronics']
    },
    {
      period: '2023 — PRESENT',
      role: 'Full-Stack Software Developer & Systems Architect',
      institution: 'Independent Projects & Open Source',
      category: 'Software Engineering & Production Builds',
      icon: <Code2 size={20} className="icon-purple" />,
      bullets: [
        'Architected and implemented Theiakshi HRMS enterprise platform with React, Node.js, Express, and PostgreSQL.',
        'Designed Relational Database Schemas and automated migration workflows for attendance regularizations.',
        'Built full-stack business web applications including Fitzone Gym platform with booking systems and admin controls.',
        'Developed pixel-perfect UI replicas of complex fintech applications (PhonePe UI Clone).'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST APIs']
    },
    {
      period: '2024',
      role: 'IoT Hardware Systems Engineer (Project Lead)',
      institution: 'Embedded Innovation Showcase',
      category: 'Hardware & Systems Integration',
      icon: <Cpu size={20} className="icon-green" />,
      bullets: [
        'Designed real-time solar PV array fault detection circuit with analog sensor inputs and threshold logic.',
        'Configured Wi-Fi telemetry pipelines sending sensor readings directly to centralized web dashboards.',
        'Prototyped automated greenhouse micro-climate misting control board under strict 24-hr time constraints.'
      ],
      tech: ['ESP8266', 'Arduino IDE', 'C++', 'Wi-Fi Telemetry', 'Circuit Prototyping']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 / Background &amp; Milestones</span>
          <h2 className="section-title">Engineering Experience Timeline</h2>
          <p className="section-subtitle">
            Academic education, full-stack software development milestones, and hardware engineering projects.
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
