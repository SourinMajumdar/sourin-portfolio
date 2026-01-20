import React from 'react';
import { 
  Github, Linkedin, Mail, FileDown, 
  Code2, Target, Rocket, Instagram,
  Camera, Bike, Gamepad2, Bed, Hamburger,
  Music2Icon, Heart

} from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";
// import { Button } from './ui/button';
import '../styles/Hero.css';
import ParticleNetwork from './ParticleNetwork';

const Hero = ({ isDarkMode }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {isDarkMode && <ParticleNetwork />}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            Hi, I'm
          </div>
          <h1 className="hero-name">Sourin Majumdar</h1>
          <h2 className="hero-title">
            <span className="typed-text">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Web Development Enthusiast",
                  "Artist",
                  "Photographer",
                  "Car and Bike Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="hero-description">
            I build intuitive, user-focused web interfaces.
          </p>

          <div className="hero-cta">
            {/* <Button onClick={scrollToContact} className="btn-primary">
              <Mail size={20} />
              Let's Connect
            </Button> */}
            <a 
              href="https://github.com/SourinMajumdar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link social-link-github"
              aria-label="GitHub"
            >
              <Github size={24} className="icon-github" />
            </a>
            <a 
              href="https://linkedin.com/in/sourinmajumdar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link social-link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="icon-linkedin" />
            </a>
            <a 
              href="https://www.instagram.com/sourinsig/"
              target='_blank'
              className="social-link social-link-instagram"
              aria-label="Instagram"
            >
              <Instagram size={24} className="icon-instagram" />
            </a>

            <a href="/Sourin_Majumdar_Resume.pdf"
              download
              className="btn-secondary"
            ><FileDown size={20} />
              Download Resume
            </a>
          </div>

          {/* <div className="hero-social"> */}
          {/* </div> */}
        </div>

        <div className="hero-visual">
          <div className="floating-card camera">
            <Camera size={40} className="card-icon-svg card-icon-camera" />
          </div>
          <div className="floating-card bike">
            <Bike size={40} className="card-icon-svg card-icon-bike" />
          </div>
          <div className="floating-card game">
            <Gamepad2 size={40} className="card-icon-svg card-icon-game" />
          </div>
          <div className="floating-card code">
            <Code2 size={40} className="card-icon-svg card-icon-code" />
          </div>
          <div className="floating-card bed">
            <Bed size={40} className="card-icon-svg card-icon-bed" />
          </div>
          <div className="floating-card ham">
            <Hamburger size={40} className="card-icon-svg card-icon-ham" />
          </div>
          <div className="floating-card music">
            <Music2Icon size={40} className="card-icon-svg card-icon-music" />
          </div>
          <div className="floating-card love">
            <Heart size={40} className="card-icon-svg card-icon-love" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;