import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite']
    },
    {
      title: 'BACKEND',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'IOT & HARDWARE',
      skills: ['Arduino', 'ESP8266/ESP32', 'Embedded C', 'IoT Protocols']
    },
    {
      title: 'TOOLS',
      skills: ['Git', 'GitHub', 'Bash', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title reveal-text">EXPERTISE / STACK</h2>
      
      <div className="skills-static-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-cat-box scale-up">
            <h3 className="skill-cat-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
