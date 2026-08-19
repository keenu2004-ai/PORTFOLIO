import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title reveal-text">VALIDATION / AWARDS</h2>
      
      <div className="cert-feature scale-up">
        <div className="cert-visual">
          <div className="cert-box">
            <span className="cert-id">CERT.01</span>
          </div>
        </div>
        
        <div className="cert-content">
          <p className="cert-tag">FRONTEND DEVELOPMENT</p>
          <h3 className="cert-name">PROFESSIONAL CERTIFICATE</h3>
          <p className="cert-desc">
            Mastery in building modern, responsive, and high-performance web applications 
            using React, TypeScript, and standard design principles.
          </p>
          <div className="cert-footer">
            <span className="issuer">PROFESSIONAL COUNCIL</span>
            <span className="date">2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
