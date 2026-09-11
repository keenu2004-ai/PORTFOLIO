import { SKILLS } from '../config/data';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND & WEBGL',
      skills: SKILLS.frontend
    },
    {
      title: 'BACKEND & APIs',
      skills: SKILLS.backend
    },
    {
      title: 'DATABASE & ARCHITECTURE',
      skills: SKILLS.database
    },
    {
      title: 'INFRASTRUCTURE & TOOLS',
      skills: SKILLS.devops
    },
    {
      title: 'IOT & EMBEDDED SYSTEMS',
      skills: SKILLS.embedded
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
