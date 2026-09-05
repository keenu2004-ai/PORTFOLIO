import { Globe, Users, LayoutDashboard, Server, Cpu, Cloud } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Globe size={24} className="s-icon cyan" />,
      title: 'Business Web Applications',
      desc: 'Building modern, high-performance web applications using React, TypeScript, and modern CSS tailored for startups and businesses.',
      value: 'Delivers fast, responsive, and reliable digital products.'
    },
    {
      icon: <Users size={24} className="s-icon purple" />,
      title: 'HRMS & Management Systems',
      desc: 'Architecting custom HR portals, employee directories, attendance tracking, and regularization approval workflows.',
      value: 'Streamlines internal business operations and workforce tracking.'
    },
    {
      icon: <LayoutDashboard size={24} className="s-icon green" />,
      title: 'Custom Admin Dashboards',
      desc: 'Engineering data-rich dashboard interfaces with data tables, live telemetry graphs, and role-based access management.',
      value: 'Empowers business leaders with clean operational visibility.'
    },
    {
      icon: <Server size={24} className="s-icon orange" />,
      title: 'RESTful APIs & Backend Services',
      desc: 'Developing scalable Node.js and Express APIs with secure authentication, request validation, and database controllers.',
      value: 'Ensures secure, high-throughput backend communication.'
    },
    {
      icon: <Cpu size={24} className="s-icon red" />,
      title: 'IoT & Hardware Integration',
      desc: 'Connecting ESP8266 / ESP32 microcontrollers and sensors to cloud servers for real-time fault detection and automation.',
      value: 'Bridges physical hardware telemetry directly with web platforms.'
    },
    {
      icon: <Cloud size={24} className="s-icon blue" />,
      title: 'Server & Deployment Infrastructure',
      desc: 'Containerizing full-stack applications using Docker, setting up Nginx reverse proxies, and managing production environments.',
      value: 'Guarantees reliable application deployment and server uptime.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06 / Engineering Capabilities</span>
          <h2 className="section-title">What I Can Build For You</h2>
          <p className="section-subtitle">
            Client-focused software development services backed by hands-on full-stack engineering and hardware experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div className="service-header">
                {srv.icon}
                <h3>{srv.title}</h3>
              </div>
              <p className="service-desc">{srv.desc}</p>
              <div className="service-value">
                <span className="val-tag">Engineering Value:</span>
                <span>{srv.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
