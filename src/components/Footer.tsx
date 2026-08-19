import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-tag reveal-text">PROJECT IN MIND?</p>
          <h2 className="contact-big-title reveal-text">LET'S BUILD<br/>SOMETHING<br/><span>ICONIC.</span></h2>
        </div>
        
        <div className="contact-right scale-up">
          <div className="contact-card">
            <p className="card-label">EMAIL ME</p>
            <a href="mailto:vaibhav@example.com" className="card-link">vaibhav@portfolio.com</a>
            
            <p className="card-label mt">SOCIALS</p>
            <div className="card-socials">
              <a href="https://github.com/x-vaibhav" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="#">LINKEDIN</a>
              <a href="#">INSTAGRAM</a>
            </div>
            
            <div className="availability">
              <div className="status-dot"></div>
              <span>CURRENTLY ACCEPTING NEW PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-mini">
        <p className="credits">© 2026 / DESIGNED & DEVELOPED BY VAIBHAV</p>
        <div className="footer-loc">
          <span className="time">LOCAL TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
