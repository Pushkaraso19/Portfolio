import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ProjectsSection.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card card-hover">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.alt}
          loading="lazy"
        />
      </div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-text">{project.description}</p>
      <div className="project-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="project-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.links.demo && (
          <a 
            href={project.links.demo} 
            className="project-link" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Live Demo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
        {project.links.github && (
          <a 
            href={project.links.github} 
            className="project-link" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');
  const [displayProjects, setDisplayProjects] = useState([]);
  const containerRef = useRef(null);

  // Calculate how many cards can fit in the viewport
  const calculateVisibleCards = useCallback(() => {
    const containerWidth = window.innerWidth;
    
    if (containerWidth <= 480) {
      setVisibleCards(1); // Mobile: 1 card
    } else if (containerWidth <= 768) {
      setVisibleCards(2); // Tablet: 2 cards  
    } else {
      setVisibleCards(3); // Desktop: 3 cards
    }
  }, []);

  useEffect(() => {
    calculateVisibleCards();
    window.addEventListener('resize', calculateVisibleCards);
    
    return () => {
      window.removeEventListener('resize', calculateVisibleCards);
    };
  }, [calculateVisibleCards]);

  // Create infinite scroll array with extra cards for seamless transition
  useEffect(() => {
    if (projects.length === 0) return;
    
    const totalCards = visibleCards + 2; // Show visible cards + 1 on each side for transition
    const infiniteProjects = [];
    
    for (let i = 0; i < totalCards; i++) {
      const projectIndex = (currentIndex - 1 + i + projects.length) % projects.length;
      infiniteProjects.push({
        ...projects[projectIndex],
        uniqueKey: `${projects[projectIndex].id}-${currentIndex}-${i}`
      });
    }
    
    setDisplayProjects(infiniteProjects);
  }, [projects, currentIndex, visibleCards]);

  // Navigation functions
  const handlePrevious = useCallback(() => {
    if (isAnimating || projects.length <= 1) return;
    
    setIsAnimating(true);
    setAnimationDirection('slide-right');
    
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        return newIndex < 0 ? projects.length - 1 : newIndex;
      });
      setAnimationDirection('');
      setIsAnimating(false);
    }, 200);
  }, [isAnimating, projects.length]);

  const handleNext = useCallback(() => {
    if (isAnimating || projects.length <= 1) return;
    
    setIsAnimating(true);
    setAnimationDirection('slide-left');
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setAnimationDirection('');
      setIsAnimating(false);
    }, 200);
  }, [isAnimating, projects.length]);

  // Direct navigation to specific slide
  const handleDotClick = useCallback((index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    const direction = index > currentIndex ? 'slide-left' : 'slide-right';
    setAnimationDirection(direction);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationDirection('');
      setIsAnimating(false);
    }, 200);
  }, [isAnimating, currentIndex]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
    };

    // Only add listener if the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.addEventListener('keydown', handleKeyDown);
        } else {
          document.removeEventListener('keydown', handleKeyDown);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, [handlePrevious, handleNext]);

  const visibleProjects = displayProjects;

  return (
    <section id="projects" className="section section-py">
      <div className="container-lg">
        <div className="projects-header">
          <h2 className="section-title section-title-lg">Projects</h2>
        </div>

        <div className="horizontal-scroll-container" ref={containerRef}>
          {/* Enhanced Left Arrow */}
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={handlePrevious}
            disabled={projects.length <= 1 || isAnimating}
            aria-label="Previous projects"
            title="View previous projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Projects Container */}
          <div className="scroll-wrapper">
            <div 
              className={`horizontal-scroll-content ${animationDirection ? `animate-${animationDirection}` : ''}`}
              style={{
                // Add transform-style for better 3D rendering
                transformStyle: 'preserve-3d'
              }}
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard 
                  key={project.uniqueKey || `${project.id}-${index}`} 
                  project={project} 
                />
              ))}
            </div>
          </div>

          {/* Enhanced Right Arrow */}
          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={handleNext}
            disabled={projects.length <= 1 || isAnimating}
            aria-label="Next projects"
            title="View next projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Enhanced Navigation Dots */}
        {projects.length > 1 && (
          <div className="navigation-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                disabled={isAnimating}
                aria-label={`Go to project ${index + 1}`}
                title={`View project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;