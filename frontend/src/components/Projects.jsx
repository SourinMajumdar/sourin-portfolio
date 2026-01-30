import React from 'react';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import '../styles/Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);
  const sectionRef = useRef(null);
  
  const handleToggle = () => {
    const wasShowingAll = showAll;
    setShowAll(!showAll);
    
    if (!showAll) {
      // Expanding - scroll to show the new projects after a short delay
      setTimeout(() => {
        const projectsSection = projectsRef.current;
        if (projectsSection) {
          const thirdCard = projectsSection.children[2];
          if (thirdCard) {
            thirdCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }, 100);
    } else {
      // Collapsing - scroll back to the projects section top
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };
  
  const projects = [
    {
      id: 1,
      title: 'Trackmate',
      subtitle: 'Job Application Tracker',
      description: 'A serverless full-stack job application tracker built with React and Firebase, providing secure authentication, per-user data storage, real-time updates, and advanced filtering through an intuitive dashboard.',
      image: '/trackmate.png',
      technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase', 'Cloud Firestore'],
      features: [
        'Secure authentication with per-user accounts',
        'Add, edit, delete and search job applications and important dates',
        'Status-based filtering with interactive insights',
        'Real-time cloud sync with per-user data isolation',
      ],
      githubUrl: 'https://github.com/SourinMajumdar/job-application-tracker',
      liveUrl: 'https://trackmateui.netlify.app/'
    },
    {
      id: 2,
      title: 'Devmate',
      subtitle: 'A centralized developer dashboard',
      description: 'Devmate is a modern developer dashboard that brings projects, activity, and portfolio management into a single interface. It provides a clean workspace to manage and showcase development work, track recent activity, and visualize personal progress through a structured, dashboard-style experience.',
      image: '/devmate.png', 
      technologies: ['React.js', 'JavaScript', 'Vite', 'CSS'],
      features: [
        'Centralized dashboard for managing and showcasing developer projects',
        'Editable developer profile with tech stack and personal details',
        'Project management with add, edit, and delete workflows',
        'Analytics snapshot and content timeline for activity tracking'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/devmate',
      liveUrl: 'https://devmateui.netlify.app/'
    },
    {
      id: 3,
      title: 'Link in Bio',
      subtitle: 'A personal landing page for all my social links',
      description: 'A minimal and responsive Link-in-Bio web application that acts as a single hub for all my social profiles, portfolio, and important links. Designed with a clean UI, smooth animations, and mobile-first responsiveness for easy sharing.',
      image: '/linkinbio.png', 
      technologies: ['React.js', 'JavaScript', 'Vite', 'Framer Motion', 'CSS'],
      features: [
        'Centralized hub for social media, portfolio, and contact links',
        'Mobile-first responsive design for seamless viewing on all devices',
        'Smooth hover and entrance animations using Framer Motion',
        'Clean, minimal UI optimized for fast loading and sharing',
        'Deployed on Vercel for high availability'
      ],
      githubUrl: 'https://github.com/SourinMajumdar/SourinLinks', // update if repo name differs
      liveUrl: 'https://sourinlinks.vercel.app/'
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
      title: 'Simon Game',
      subtitle: 'Memory-Based Game',
      description:
      "A classic Simon memory game recreated for the browser. Tests users' memory by generating increasingly complex color sequences that must be repeated correctly.",
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
      id: 7,
      title: 'Drum Kit',
      subtitle: 'Keyboard-Driven Music App',
      description:
      "An interactive drum kit web application that allows users to play drum sounds using keyboard keys or mouse clicks, focusing on event handling and audio integration.",
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
      id: 8,
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
    <section id="projects" className="projects-section" ref={sectionRef}>
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
