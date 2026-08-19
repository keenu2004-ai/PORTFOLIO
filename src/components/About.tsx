import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-visual scale-up">
          <div className="pinterest-grid">
            <div className="pinterest-item item-1">
              <div
                className="img-placeholder"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <span className="img-label">UI/UX</span>
              </div>
            </div>
            <div className="pinterest-item item-2">
              <div
                className="img-placeholder"
                style={{ backgroundColor: "#00f0ff20" }}
              >
                <span className="img-label">IOT</span>
              </div>
            </div>
            <div className="pinterest-item item-3">
              <div
                className="img-placeholder"
                style={{ backgroundColor: "#ffffff05" }}
              >
                <span className="img-label">CODE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title reveal-text">WHO IS / VAIBHAV?</h2>
          <div className="about-description reveal-text">
            <p className="resume-intro">
              An enthusiastic and dedicated student currently pursuing a
              Bachelor of Technology at ABES Engineering College, specialized in
              Electronics and Communication Engineering.
            </p>
            <p>
              Driven by the synergy between hardware and software, I bridge the
              gap between the physical world and digital experiences. I design
              with purpose and code with precision.
            </p>
            <p>
              My expertise spans from engineering complex IoT ecosystems like
              Solar Defect Detection systems to crafting pixel-perfect frontend
              replicas of major fintech platforms like PhonePe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
