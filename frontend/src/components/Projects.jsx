import React from 'react';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from './ui/button';
import '../styles/Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);
  
  const handleToggle = () => {
    setShowAll(!showAll);
    if (!showAll) {
      // Scroll to show the new projects after a short delay
      setTimeout(() => {
        const projectsSection = projectsRef.current;
        if (projectsSection) {
          const thirdCard = projectsSection.children[2];
          if (thirdCard) {
            thirdCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }, 100);
    }
  };
  
  const projects = [
    {
      id: 1,
      title: 'Trackmate',
      subtitle: 'Job Application Tracker',
      description: 'A comprehensive frontend web application designed to help job seekers track and manage their job applications efficiently. Features a clean dashboard interface with dynamic filtering and search capabilities.',
      image: '/trackmate.png',
      technologies: ['React.js', 'JavaScript', 'Vite', 'Framer Motion', 'localStorage'],
      features: [
        'Add, edit, and search job applications, important dates',
        'Status-based filtering system',
        'Responsive dashboard UI with Flexbox, along with smooth animations',
        'Client-side data persistence'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/job-application-tracker',
      liveUrl: 'https://trackmateui.netlify.app/'
    },
    {
      id: 2,
      title: 'Taskmate',
      subtitle: 'Todo Application',
      description: 'A beautiful and responsive single-page application for managing daily tasks. Built with React functional components and hooks, featuring a modern glassmorphism UI design.',
      image: '/taskmate.png',
      technologies: ['React.js', 'Vite', 'CSS', 'localStorage'],
      features: [
        'React functional components and hooks',
        'Persistent task storage with localStorage',
        'Glassmorphism UI with smooth animations',
        'Task lifecycle management',
        'Mobile-responsive design'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/todo-app',
      liveUrl: 'https://taskmateui.netlify.app/'
    },
    {
      id: 3,
      title: 'TinDog',
      subtitle: 'Landing Page Design',
      description: 'A creative and responsive landing page for a fictional dog dating platform. Showcases clean UI/UX design principles and mobile-first development approach.',
      image: '/tindog.png',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      features: [
        'Clean UI/UX design principles',
        'Mobile-first responsive layout',
        'Cross-device compatibility',
        'Bootstrap components integration',
        'Modern landing page structure'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/TinDog',
      liveUrl: 'https://sourinmajumdar.github.io/TinDog/'
    },
    {
      id: 4,
      title: 'Simon Game',
      subtitle: 'Memory-Based Game',
      description:
      'A classic Simon memory game recreated for the browser. Tests users’ memory by generating increasingly complex color sequences that must be repeated correctly.',
      image: '/simongame.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      features: [
        'Progressively increasing difficulty levels',
        'Keyboard and button-based user interactions',
        'Game state management using JavaScript',
        'Audio and visual feedback for user actions'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/Simon-Game',
      liveUrl: 'https://sourinmajumdar.github.io/Simon-Game/'
    },
    {
      id: 5,
      title: 'Drum Kit',
      subtitle: 'Keyboard-Driven Music App',
      description:
      'An interactive drum kit web application that allows users to play drum sounds using keyboard keys or mouse clicks, focusing on event handling and audio integration.',
      image: '/drumkit.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Keyboard and click-based sound triggers',
        'Audio playback using JavaScript',
        'Responsive layout for multiple devices',
        'Visual animations on key interaction'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/Drum-Kit',
      liveUrl: 'https://sourinmajumdar.github.io/Drum-Kit/'
    },
    {
      id: 6,
      title: 'Dice Game',
      subtitle: 'Interactive Browser Game',
      description:
        'A simple and interactive browser-based dice game that simulates random dice rolls and determines a winner on each refresh. Built to practice DOM manipulation and basic game logic.',
      image: '/dicegame.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'BootStrap'],
      features: [
        'Random dice roll generation using JavaScript',
        'Dynamic DOM updates based on game outcome',
        'Clear visual feedback for winner determination',
        'Lightweight and fast-loading browser game'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/Dice-Game',
      liveUrl: 'https://sourinmajumdar.github.io/Dice-Game/'
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">What I have built</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            A showcase of my recent work, built with modern technologies and best practices
          </p>
        </div>

        <div className={`projects-grid ${showAll ? "expanded" : ""}`} ref={projectsRef}>
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${!showAll && index >= 2 ? 'hidden' : ''} ${showAll && index >= 2 ? 'fade-in' : ''}`}
              style={{ animationDelay: showAll ? `${(index - 2) * 0.1}s` : '0s' }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Sparkles className="sparkle-icon" size={32} />
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="project-btn"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="project-btn"
                  >
                    <Github size={18} />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-toggle-wrapper">
          <button
            className={`projects-toggle ${showAll ? "active" : ""}`}
            onClick={handleToggle}
          >
            <span className="toggle-text">
              {showAll ? "Show Less" : `View All Projects (${projects.length - 2} More)`}
            </span>
            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;