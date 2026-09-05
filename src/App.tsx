import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FlagshipProject from './components/FlagshipProject';
import Projects from './components/Projects';
import Experience from './components/Experience';
import DevOpsSection from './components/DevOpsSection';
import Services from './components/Services';
import Certifications from './components/Certifications';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { SITE_CONFIG } from './config/site';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Dynamic Page Title & Routing check
    if (currentPath === '/' || currentPath === '') {
      document.title = SITE_CONFIG.title;
    } else {
      document.title = `Page Not Found — ${SITE_CONFIG.name}`;
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath !== '/' && currentPath !== '') return;

    // Custom Cursor Logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .project-card, .skill-category, .pinterest-item, .repo-card, .service-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Scroll Observer for Smooth Reveals
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.reveal-text, .scale-up, .skill-cat-box, .cert-feature, .service-card, .timeline-card, .repo-card'
    );
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, [currentPath]);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  if (currentPath !== '/' && currentPath !== '') {
    return <NotFound onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="App">
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${cursorPos.x - (isHovering ? 40 : 20)}px, ${cursorPos.y - (isHovering ? 40 : 20)}px)`,
        }}
      />

      <Navbar />
      <main className="container" id="main-content">
        <Hero />
        <About />
        <Skills />
        <FlagshipProject />
        <Projects />
        <Experience />
        <DevOpsSection />
        <Services />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
