import './Certifications.css';

const Certifications = () => {
  const qualifications = [
    {
      id: 'QUAL.01',
      tag: 'ACADEMIC DEGREE',
      name: 'BACHELOR OF TECHNOLOGY — ECE',
      desc: 'Electronics and Communication Engineering degree specialization covering microcontroller architecture, signal processing, and low-level embedded software.',
      issuer: 'ABES ENGINEERING COLLEGE',
      date: 'EXPECTED 2026',
    },
    {
      id: 'QUAL.02',
      tag: 'FULL-STACK SOFTWARE',
      name: 'FULL-STACK WEB SYSTEMS ARCHITECTURE',
      desc: 'Production-ready web application development using React, TypeScript, Node.js, Express, and PostgreSQL with database migrations and containerization.',
      issuer: 'SOFTWARE ENGINEERING SHOWCASE',
      date: '2024 — PRESENT',
    },
  ];

  return (
    <section id="certifications" className="certifications" aria-labelledby="certs-heading">
      <div className="section-header-wrap">
        <span className="section-tag">08 / Qualifications &amp; Education</span>
        <h2 id="certs-heading" className="section-title reveal-text">
          Education &amp; Engineering Credentials
        </h2>
      </div>

      <div className="certs-list">
        {qualifications.map((q) => (
          <div key={q.id} className="cert-feature scale-up">
            <div className="cert-visual">
              <div className="cert-box">
                <span className="cert-id">{q.id}</span>
              </div>
            </div>

            <div className="cert-content">
              <p className="cert-tag">{q.tag}</p>
              <h3 className="cert-name">{q.name}</h3>
              <p className="cert-desc">{q.desc}</p>
              <div className="cert-footer">
                <span className="issuer">{q.issuer}</span>
                <span className="date">{q.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
