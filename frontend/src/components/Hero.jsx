import React from 'react';
import { Github, Linkedin, FileUser, Instagram } from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";
import ColorPicker from './ColorPicker';
import ParticleNetwork from './ParticleNetwork';
import '../styles/Hero.css';

const Hero = ({ accentId, changeAccent }) => {
  return (
    <section id="home" className="hero-section">
      {/* Particle network */}
      <ParticleNetwork />

      {/* Aurora ambient orbs */}
      <div className="hero-aurora hero-aurora-1" aria-hidden="true"></div>
      <div className="hero-aurora hero-aurora-2" aria-hidden="true"></div>
      <div className="hero-aurora hero-aurora-3" aria-hidden="true"></div>
      <div className="hero-aurora hero-aurora-4" aria-hidden="true"></div>

      <div className="hero-container">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Sourin Majumdar</h1>
        <h2 className="hero-title">
          <span className="typed-text">
            <Typewriter
              words={[
                "Web Developer",
                "Artist",
                "Photographer",
                "Car & Bike Enthusiast",
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
          I build clean, intuitive, user-focused web applications.
        </p>

        <div className="hero-cta">
          <a
            href="https://github.com/SourinMajumdar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sourinmajumdar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/sourinsig/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://drive.google.com/file/d/1IYnLgj2-wQTw5OMKKUVJ2B8_0ixizIEk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link resume-link"
          >
            <FileUser size={18} />
            View Resume
          </a>
        </div>

        {/* Available badge */}
          {/* <div className="hero-available">
          <span className="available-dot"></span>
          <span>Open to opportunities</span>
        </div> */}

        <ColorPicker accentId={accentId} changeAccent={changeAccent} />
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
