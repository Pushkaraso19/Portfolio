import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import CountUp from '../../TextAnimations/CountUp/CountUp';
import './AboutSection.css';

const AboutSection = ({ aboutInfo, personalInfo }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="section section-py">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="tab-content about-tab">
              <div className="about-grid">
                <div className="about-text-section">
                  {aboutInfo.paragraphs.map((paragraph, index) => (
                    <p key={index} className="about-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Animated Code Block */}
                <div className="code-showcase">
                  <div className="code-window">
                    <div className="code-header">
                      <div className="code-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                      <span className="code-title">about-me.js</span>
                    </div>
                    <div className="code-content">
                      <pre className="code-text">
{`const developer = {
  name: "${aboutInfo.developerProfile.name}",
  role: "${aboutInfo.developerProfile.role}",
  location: "${aboutInfo.developerProfile.location}",
  specialties: [
    ${aboutInfo.developerProfile.specialties.map(item => `"${item}"`).join(',\n    ')}
  ],
  passions: [
    ${aboutInfo.developerProfile.passions.map(item => `"${item}"`).join(',\n    ')}
  ],
  currentlyLearning: "${aboutInfo.developerProfile.currentlyLearning}",
  funFact: "${aboutInfo.developerProfile.funFact}",
  motto: "${aboutInfo.developerProfile.motto}"
};`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
