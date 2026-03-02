import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import projects from '../data/projects';
import '../styles/Projects.css';
import '../styles/AllProjects.css';

const AllProjects = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  // Reset scroll position when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="all-projects-page">
      <Navigation
        activeSection="projects"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isStandalonePage
      />

      <main className="all-projects-main">
        {/* Page header */}
        <div className="all-projects-header">
          <button className="back-btn" onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
          <h1 className="all-projects-title">All my Projects</h1>
          <p className="all-projects-subtitle">
            A complete showcase of my works.
          </p>
        </div>

        {/* Projects grid */}
        <div className="section-container">
          <motion.div
            className="projects-grid expanded"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
