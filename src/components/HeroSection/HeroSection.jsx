import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import CountUp from '../../TextAnimations/CountUp/CountUp';
import DecryptedText from '../../TextAnimations/DecryptedText/DecryptedText';
import photoImage from '../../assets/photo.png';
import './HeroSection.css';

const HeroSection = ({ personalInfo, onNavigate }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = personalInfo.titles;
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedTitle === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayedTitle(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="home" className="section">
      <div className="hero-content hero-grid">
        {/* Left side: Name, subtitle, description */}
        <div className="hero-left">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <DecryptedText
              text={personalInfo.name}
              sequential={true}
              animateOn='view'
              revealDirection="start"
              encryptedClassName="encrypted-char"
              speed={60}
              maxIterations={50}
            />
          </h1>
          <h2 className="hero-subtitle">
            <span className="subtitle-highlight">
              {displayedTitle}
              <span className="typing-cursor">|</span>
            </span>
          </h2>
          <p className="hero-description">{personalInfo.description}</p>
          
          {/* Stats moved to left side */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">
                <CountUp
                  from={0}
                  to={15}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <CountUp
                  from={0}
                  to={20000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </span>
              <span className="stat-label">Lines of Code</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </span>
              <span className="stat-label">Passion</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Ideas</span>
            </div>
          </div>
        </div>
        
        {/* Right side: Enhanced Stats */}
        <div className="hero-right">
          
            <ProfileCard
              name={personalInfo.name}
              title="Passionate developer"
              handle="pushkar.dev"
              status="Open to Work!"
              contactText="Contact Me"
              avatarUrl={photoImage}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => onNavigate('contact')}
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
