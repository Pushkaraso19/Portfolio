import { FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import './ExperienceSection.css';

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="section section-py experience-section">
      <div className="container">
        <h2 className="section-title section-title-lg">Experience</h2>
        <div className="experience-list">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-item">
              {/* Header */}
              <div className="experience-header">
                <div className="experience-left">
                  <div className="title-location">
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="location">
                      <FiMapPin className="location-icon" />
                      {experience.location}
                    </div>
                  </div>
                  <p className="experience-company">{experience.company} • {experience.type}</p>
                </div>
              </div>

              {/* Timeline Date - positioned opposite to card */}
              <div className="experience-dates">
                <div className="date-range">
                  <FiCalendar className="date-icon" />
                  <span>{experience.startDate} - {experience.endDate}</span>
                </div>
              </div>

              {/* Description */}
              <p className="experience-description">{experience.description}</p>

              {/* Responsibilities */}
              {experience.responsibilities && (
                <div className="experience-section-block">
                  <h4 className="section-block-title">Key Responsibilities</h4>
                  <ul className="responsibility-list">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="responsibility-item">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              {experience.impact && (
                <div className="experience-section-block">
                  <h4 className="section-block-title">Impact & Achievements</h4>
                  <ul className="impact-list">
                    {experience.impact.map((achievement, index) => (
                      <li key={index} className="impact-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Documentation Links */}
              {experience.documentation && (
                <div className="doc-links">
                  {experience.documentation.projectDemo && experience.documentation.projectDemo !== "#" && (
                    <a href={experience.documentation.projectDemo} className="doc-link">
                      <FiExternalLink /> Demo
                    </a>
                  )}
                  {experience.documentation.certificate && experience.documentation.certificate !== "#" && (
                    <a href={experience.documentation.certificate} className="doc-link">
                      <FiExternalLink /> Certificate
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;