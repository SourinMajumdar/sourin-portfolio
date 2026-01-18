import React from "react";
import "../styles/Skills.css";
import kombaiIcon from "../assets/kombai.png";

// Devicon / Simple Icons
import { VscVscode } from "react-icons/vsc";
import { RiJavascriptFill } from "react-icons/ri";
import {
  DiJava,
  DiPython,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
} from "react-icons/di";

import {
  SiMysql,
  SiVite,
  SiFramer,
  SiBootstrap,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

// Lucide icons for category headers
import { Code, Component, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "JavaScript", icon: <RiJavascriptFill size={36} color="#F7DF1E" /> },
        { name: "Java", icon: <DiJava size={36} color="#007396" /> },
        { name: "Python", icon: <DiPython size={36} color="#3776AB" /> },
        { name: "HTML", icon: <DiHtml5 size={36} color="#E34F26" /> },
        { name: "CSS", icon: <DiCss3 size={36} color="#1572B6" /> },
        { name: "SQL", icon: <SiMysql size={36} color="#4479A1" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Component size={24} />,
      skills: [
        { name: "React", icon: <DiReact size={36} color="#61DAFB" /> },
        { name: "Vite", icon: <SiVite size={36} color="#6f00af" /> },
        { name: "Framer Motion", icon: <SiFramer size={36} color="#E91E63" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={36} color="#7952B3" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git", icon: <DiGit size={36} color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub size={36} color="#181717" /> },
        { name: "VS Code", icon: <VscVscode size={36} color="#007ACC" /> },
        { name: "Netlify", icon: <SiNetlify size={36} color="#00C7B7" /> },
        { name: "Kombai", icon: kombaiIcon, size: 36 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Tech I'm familiar with</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-icon-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-icon-item">
                    <div className="skill-icon">
                      {/* ✅ FIX: handle JSX icons + image icons */}
                      {typeof skill.icon === "string" ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width={skill.size || 36}
                          height={skill.size || 36}
                        />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;