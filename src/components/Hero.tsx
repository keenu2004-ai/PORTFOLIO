import './Hero.css';

const Hero = () => {
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
          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
