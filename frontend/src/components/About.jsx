import React from 'react';
import { 
  Code2, Lightbulb, Target, Compass,
  Camera, Sprout, Luggage, Brush, 
  Music4Icon, Bike, Gamepad2, 
} 
from 'lucide-react';
import { FaCat } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            About Me<FaCat size={26} opacity={0.7}/>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a Computer Science student at Vellore Institute of Technology with an interest in 
              frontend development and problem-solving. I enjoy building intuitive interfaces and 
              exploring web development through hands-on projects, continuously learning 
              and refining my skills along the way.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Lightbulb size={30} className="highlight-icon-lightbulb" />
                </div>
                <div className="highlight-content">
                  <h3>Curious by Nature</h3>
                  <p>I enjoy understanding how things work and exploring ideas beyond the surface.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Target size={30} className="highlight-icon-target" />
                </div>
                <div className="highlight-content">
                  <h3>Thoughtful & Detail-Oriented</h3>
                  <p>I pay attention to small details and like things to feel intentional and well put together.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Compass size={30} className="highlight-icon-compass" />
                </div>
                <div className="highlight-content">
                  <h3>Grounded & Consistent</h3>
                  <p>I value steady progress, clear thinking, and building things the right way over rushing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-hobbies">
            <h3 className="hobbies-title">Hobbies</h3>
            
            <div className="hobby-card">
              <Camera size={28} className="hobby-icon hobby-icon-camera"/>
              <div className="hobby-title">Photography · Nature</div>
              <Sprout size={28} className="hobby-icon2 hobby-icon-sprout"/>
            </div>

            <div className="hobby-card">
              <Bike size={28} className="hobby-icon hobby-icon-bike"/>
              <div className="hobby-title">Riding · Travelling</div>
              <Luggage size={28} className="hobby-icon2 hobby-icon-luggage"/>
            </div>

            <div className="hobby-card">
              <Brush size={28} className="hobby-icon hobby-icon-brush"/>
              <div className="hobby-title">Art · Music</div>
              <Music4Icon size={28} className="hobby-icon2 hobby-icon-music"/>
            </div>

            <div className="hobby-card">
              <MdMovie size={28} className="hobby-icon hobby-icon-movie"/>
              <div className="hobby-title">Movies · Gaming</div>
              <Gamepad2 size={28} className="hobby-icon2 hobby-icon-gamepad"/>
            </div>
          </div>

        </div>

        <div className="about-education-wrapper">
          <div className="about-education">
            <h3 className="education-title">Education</h3>
            <div className="education-item">
              <div className="education-header">
                <div className="education-info">
                  <div className="education-degree">B.Tech in Computer Science and Engineering</div>
                  <div className="education-school">Vellore Institute of Technology - Amaravathi (AP)</div>
                  <p className="edu-details">Graduation: 2026 </p>
                </div>
                <div className="education-date-pill">Sep 2020 - Present</div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-header">
                <div className="education-info">
                  <div className="education-degree">High School and Senior School</div>
                  <div className="education-school">Kendriya Vidyalaya NFR Maligaon, Guwahati</div>
                  <p className="edu-details">CBSE AISSCE (Class XII) 2020 - 91.2 %</p>
                  <p className="edu-details">CBSE AISSE (Class X) 2020 - 94 %</p>
                </div>
                <div className="education-date-pill">2009 - 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
