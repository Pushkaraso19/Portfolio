import React, { useState } from 'react';
import './EducationSection.css';

const EducationSection = ({ education }) => {
  const [activeTab, setActiveTab] = useState('education');
  
  // Filter education items by category
  const educationItems = education.filter(item => item.category === 'education');
  const certificationItems = education.filter(item => item.category === 'certification');

  return (
    <section id="education" className="section section-py education-section">
      <div className="container">
        <h2 className="section-title section-title-lg">Education & Certifications</h2>
        
        {/* Enhanced Tab Navigation */}
        <div className="modern-tab-navigation">
          <div className="tab-slider">
            <button 
              className={`modern-tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <div className="tab-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="tab-content-text">
                <span className="tab-title">Education</span>
                <span className="tab-subtitle">{educationItems.length} degrees</span>
              </div>
            </button>
            <button 
              className={`modern-tab-button ${activeTab === 'certification' ? 'active' : ''}`}
              onClick={() => setActiveTab('certification')}
            >
              <div className="tab-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <div className="tab-content-text">
                <span className="tab-title">Certifications</span>
                <span className="tab-subtitle">{certificationItems.length} courses</span>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'education' && (
            <div className="education-list">
              {educationItems.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="education-item-content">
                    <div className="education-header">
                      <div className="education-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                      </div>
                      <div className="education-meta">
                        <h4 className="education-title">{edu.title}</h4>
                        <div className="education-subtitle">
                          <span className="education-institution">{edu.institution}</span>
                          <span className="education-period">{edu.period}</span>
                        </div>
                        <div className="education-badges">
                          {edu.status && (
                            <div className="education-status">
                              <span className="status-label">Status:</span>
                              <span className={`status-value ${edu.status}`}>{edu.status}</span>
                            </div>
                          )}
                          {edu.grade && (
                            <div className="education-grade">
                              <span className="grade-label">Grade:</span>
                              <span className="grade-value">{edu.grade}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certification' && (
            <div className="education-list">
              {certificationItems.map((cert) => (
                <div key={cert.id} className="education-item">
                  <div className="education-item-content">
                    <div className="education-header">
                      <div className="education-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </svg>
                      </div>
                      <div className="education-meta">
                        <h4 className="education-title">{cert.title}</h4>
                        <div className="education-subtitle">
                          <span className="education-institution">{cert.institution}</span>
                          <span className="education-period">{cert.period}</span>
                        </div>
                      </div>
                      {cert.certificateUrl && (
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="action-button certificate-button minimal" title="View Certificate">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                            <polyline points="10,17 15,12 10,7"/>
                            <line x1="15" y1="12" x2="3" y2="12"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
