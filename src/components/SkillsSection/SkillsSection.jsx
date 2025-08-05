import React from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skills }) => {
  
  return (
    <section id="skills" className="section section-py skills-section">
      <div className="container">
        <h2 className="section-title section-title-lg">Skills & Technologies</h2>
        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-grid">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item" data-level={skill.status}>
                    <div className="skill-icon">
                      <img src={skill.svgPath} alt={skill.name} />
                    </div>
                    <div className="skill-tooltip">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
