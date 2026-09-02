import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sectionLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'STACK' },
    { id: 'projects', label: 'WORKS' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const sections = sectionLinks
      .map(link => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-sphere"></div>
      </div>

      <div className="hero-content">
        <div className="reveal-container">
          <p className="intro reveal-text">VAIBHAV / 2026</p>
        </div>

        <div className="reveal-container">
          <h1 className="main-title reveal-text">CREATIVE</h1>
        </div>

        <div className="reveal-container">
          <h1 className="main-title outline reveal-text">DEVELOPER</h1>
        </div>

        <div className="hero-footer reveal-text">
          <p className="description">
            Specializing in the intersection of high-end UI/UX design and smart IoT ecosystems.
            Currently engineering the future at ABES Engineering College.
          </p>
          <button
            type="button"
            className="scroll-indicator"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
          >
            <span>SCROLL</span>
            <div className="line"></div>
          </button>
        </div>
      </div>

      <nav className="section-rail" aria-label="Section navigation">
        {sectionLinks.map((link, index) => (
          <button
            key={link.id}
            type="button"
            className={`rail-item ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollToSection(link.id)}
            aria-label={`Go to ${link.label}`}
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
