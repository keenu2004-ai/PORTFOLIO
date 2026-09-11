import { useEffect, useState } from 'react';
import { PROFILE } from '../config/data';
import './Hero.css';

const SECTION_LINKS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'STACK' },
  { id: 'flagship', label: 'FLAGSHIP' },
  { id: 'projects', label: 'WORKS' },
  { id: 'experience', label: 'EXP' },
  { id: 'services', label: 'SERVICES' },
  { id: 'contact', label: 'CONTACT' },
];

const Hero = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = SECTION_LINKS
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero" aria-label="Hero Introduction">
      <div className="hero-background">
        <div className="gradient-sphere"></div>
      </div>

      <div className="hero-content">
        <div className="reveal-container">
          <p className="intro reveal-text">{PROFILE.name} / {PROFILE.role.toUpperCase()}</p>
        </div>

        <div className="reveal-container">
          <h1 className="main-title reveal-text">
            THE MODERN <span className="outline">HYBRID</span>
          </h1>
        </div>

        <div className="hero-footer reveal-text">
          <div className="description-container">
            <p className="description">
              Building full-stack web applications and connected IoT hardware ecosystems.
              From API and database design to frontend execution and embedded telemetry.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
              <a href="/Vaibhav_Arya_Resume.pdf" download="Vaibhav_Arya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Resume</a>
            </div>
          </div>
          
          <button
            type="button"
            className="scroll-indicator"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll down to About section"
          >
            <span>SCROLL</span>
            <div className="line"></div>
          </button>
        </div>
      </div>

      <nav className="section-rail" aria-label="Section quick navigation">
        {SECTION_LINKS.map((link, index) => (
          <button
            key={link.id}
            type="button"
            className={`rail-item ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollToSection(link.id)}
            aria-label={`Go to section 0${index + 1}: ${link.label}`}
            aria-current={activeSection === link.id ? 'location' : undefined}
          >
            <span className="rail-number">0{index + 1}</span>
            <span className="rail-label">{link.label}</span>
            <span className="rail-dot" />
          </button>
        ))}
      </nav>
    </section>
  );
};

export default Hero;
