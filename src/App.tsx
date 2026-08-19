import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Custom Cursor Logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .project-card, .skill-category, .pinterest-item')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // High-Impact Scroll Observer
    const observerOptions = {
      threshold: 0.05, // Lower threshold to trigger earlier
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Explicitly select elements to animate
    const revealElements = document.querySelectorAll('.reveal-text, .scale-up, .skill-cat-box, .cert-feature');
    revealElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
        style={{ 
          transform: `translate(${cursorPos.x - (isHovering ? 40 : 20)}px, ${cursorPos.y - (isHovering ? 40 : 20)}px)` 
        }}
      />
      
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
