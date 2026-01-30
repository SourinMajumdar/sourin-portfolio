import React from 'react';
import { Trophy, Code2 } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import '../styles/Achievements.css';
const Achievements = () => {
  const achievements = [
    {
      icon: <SiLeetcode size={36} />,
      title: 'LeetCode problems solved',
      value: '900+',
      description: 'Highest contest rating of 1796',
      color: '#ffa116',
      link: 'https://leetcode.com/sourin_bruh'
    },
    {
      icon: <Trophy size={36} />,
      title: 'AWS DeepRacer League',
      value: 'Top 10%',
      description: 'Ranked 98 out of 2500+ participants globally and qualified for the Pro Division (2021)',
      color: '#10b981'
    },
    {
      icon: <Code2 size={36} />,
      title: 'Problems Solved',
      value: '1300+',
      description: 'Across multiple coding platforms',
      color: '#5859b0'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Accomplishments</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Milestones that showcase dedication and continuous learning
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-value">{achievement.value}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-btn"
                  >
                    View my Profile
                  </a>
                )}
              </div>
              <div className="achievement-glow" style={{ backgroundColor: achievement.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;