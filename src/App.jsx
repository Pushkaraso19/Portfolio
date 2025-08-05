import './App.css';
import { useState, useEffect } from 'react';

// Components
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import EducationSection from './components/EducationSection/EducationSection';
import ContactSection from './components/ContactSection/ContactSection';
import Navbar from './components/Navbar/';

// Data
import { 
  personalInfo, 
  aboutInfo, 
  experiences, 
  skills, 
  projects, 
  education, 
  contactInfo 
} from './data/portfolioData';


function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [isManualScroll, setIsManualScroll] = useState(false);

    const scrollToSection = (sectionId) => {
      setIsManualScroll(true);
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => setIsManualScroll(false), 800);
    };

    // Intersection Observer to detect active section
    useEffect(() => {
        if (isManualScroll) return;
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
            let closestSection = null;
            let minDistance = Infinity;
            const offset = 80; // adjust for navbar height if needed
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distance = Math.abs(rect.top - offset);
                    if (rect.top - offset <= 0 && distance < minDistance) {
                        minDistance = distance;
                        closestSection = section;
                    }
                }
            });
            // If at the very bottom of the page, always activate contact
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
                setActiveSection('contact');
            } else if (closestSection) {
                setActiveSection(closestSection);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isManualScroll]);

  return (
    <div className="app-container">
        <HeroSection 
            personalInfo={personalInfo} 
            onNavigate={scrollToSection} 
        />
        
        <AboutSection 
            aboutInfo={aboutInfo} 
            personalInfo={personalInfo} 
        />
        <ExperienceSection 
            experiences={experiences} 
        />
        <SkillsSection 
            skills={skills} 
        />
        
        <ProjectsSection 
            projects={projects} 
        />
        
        <EducationSection 
            education={education} 
        />
        
        <ContactSection 
            contactInfo={contactInfo} 
        />

        {/* Dock Navigation */}
        <Navbar 
            activeSection={activeSection}
            onNavigate={scrollToSection}
        />
    </div>
  );
}

export default App;
