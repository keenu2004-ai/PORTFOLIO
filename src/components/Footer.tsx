import { SITE_CONFIG } from '../config/site';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-tag reveal-text">ENGINEERING &amp; COLLABORATION</p>
          <h2 className="contact-big-title reveal-text">
            LET'S BUILD<br />
            SOMETHING<br />
            <span>EXCEPTIONAL.</span>
          </h2>
        </div>

        <div className="contact-right scale-up">
          <div className="contact-card">
            <p className="card-label">DIRECT ACTION</p>
            <a href="#contact" className="card-link">
              Send Message via Form
            </a>

            <p className="card-label mt">PROFILES &amp; REPOSITORIES</p>
            <div className="card-socials">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
              >
                GITHUB
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                LINKEDIN
              </a>
            </div>

            <div className="availability">
              <div className="status-dot"></div>
              <span>CURRENTLY ACCEPTING NEW OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mini">
        <p className="credits">© 2026 / DESIGNED &amp; ENGINEERED BY VAIBHAV RAJPUT</p>
        <div className="footer-loc">
          <span className="time">
            LOCAL TIME:{' '}
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
