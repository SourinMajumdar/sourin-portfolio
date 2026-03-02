import React from 'react';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import projects from '../data/projects';
import '../styles/Projects.css';

const PREVIEW_COUNT = 2;

const Projects = () => {
  const navigate = useNavigate();
  const previewProjects = projects.slice(0, PREVIEW_COUNT);

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

        <div className="projects-grid">
          {previewProjects.map((project) => (
            <div key={project.id} className="project-card">
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
            className="projects-toggle"
            onClick={() => navigate('/projects')}
          >
            <span className="toggle-text">
              View All Projects ({projects.length - PREVIEW_COUNT} More)
            </span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
