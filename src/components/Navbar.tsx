import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200 && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'STACK', href: '#skills' },
    { name: 'FLAGSHIP', href: '#flagship' },
    { name: 'WORKS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="nav-container">
          <div className="logo">
            <a href="/#" aria-label="Vaibhav Rajput Portfolio Home">
              VAIBHAV<span>.</span>
            </a>
          </div>

          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-status desktop-only">
            <div className="status-dot"></div>
            <span>AVAILABLE FOR WORK</span>
          </div>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-nav-drawer" className="mobile-nav-drawer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-nav-status">
              <div className="status-dot"></div>
              <span>AVAILABLE FOR WORK</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
