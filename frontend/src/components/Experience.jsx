import React from 'react';

import { 
  BookmarkCheck, Github, GitBranch, 
  Users, FileText, GitPullRequest, 
  PenLine , Database, Search
} from 'lucide-react';

import '../styles/Experience.css';
import kombaiLogo from "../assets/kombai.png";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>
        {/* EXPERIENCE STARTS HERE */}

        {/* EXP 1 */}
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="experience-card">
              <div className="experience-dot"></div>
              
              <div className="experience-header">
                <div className="experience-title-group with-logo">
                  <img
                    src= {kombaiLogo}
                    alt="kombai-ai"
                    className="experience-company-logo"
                  />
                  <div>
                    <h3 className="experience-role">Frontend Developer Ambassador (Reddit-first)</h3>
                    <div className="experience-company">
                      Kombai
                      <span className="experience-meta">
                        Internship · Remote
                      </span>
                    </div>
                  </div>

                  </div>
                <div className="experience-date">Jan 2026 - Present</div>
              </div>

              <div className="experience-description">
                <p>
                  Building non-generic, real-world MVPs using Kombai’s AI-powered
                  frontend tool and sharing demos and technical breakdowns on Reddit 
                  to engage the developer community.
                </p>
              </div>

              {/* <div className="experience-highlights">
                <div className="highlight-chip">
                  <FileText size={16} />
                  <span>Documentation</span>
                </div>
                <div className="highlight-chip">
                  <Github size={16} />
                  <span>Version Control (Git)</span>
                </div>
                <div className="highlight-chip">
                  <Database size={16} />
                  <span>Data Structures and Algorithms</span>
                </div>
                <div className="highlight-chip">
                  <Search size={16} />
                  <span>Code Review</span>
                </div>
              </div> */}

              {/* <div className="experience-achievements">
                <h4>Key Contributions:</h4>
                <ul>
                  <li>Enhanced and maintained technical documentation for DSA learning resources</li>
                  <li>Reviewed codebases and issue discussions to improve overall code quality</li>
                  <li>Worked with Git-based workflows including pull requests and reviews</li>
                  <li>Contributed effectively in a distributed open-source team environment</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* EXP 2 */}
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="experience-card">
              <div className="experience-dot"></div>
              
              <div className="experience-header">
                <div className="experience-title-group with-logo">
                  <img
                    src="/scalerailabs.png"
                    alt="Scaler AI Labs"
                    className="experience-company-logo"
                  />
                  <div>
                    <h3 className="experience-role">AI Data Contributor (Contract)</h3>
                    <div className="experience-company">
                      Scaler AI labs
                      <span className="experience-meta">
                        Freelance · Remote
                      </span>
                    </div>
                  </div>
                </div>
                <div className="experience-date">Dec 2025 - Present</div>
              </div>

              <div className="experience-description">
                <p>
                  Working on structured AI data annotation and evaluation tasks,
                  following detailed guidelines to review, validate, and improve model outputs
                  with a focus on accuracy and consistency.
                  <br />
                  Task involves working on different platforms like Zendesk, Jira, Ramp, Salesforce,
                  Gmail, MS Teams, MS Word, Intercom, etc.
                </p>
              </div>

              <div className="experience-highlights">
                <div className="highlight-chip">
                  <FileText size={16} />
                  <span>Data labelling</span>
                </div>
                <div className="highlight-chip">
                  <PenLine size={16} />
                  <span>Data annotation</span>
                </div>
                <div className="highlight-chip">
                  <Search size={16} />
                  <span>Content evaluation</span>
                </div>
                <div className="highlight-chip">
                  <BookmarkCheck size={16} />
                  <span>Task Management</span>
                </div>
              </div>

              {/* <div className="experience-achievements">
                <h4>Key Contributions:</h4>
                <ul>
                  <li>Enhanced documentation and explanations for DSA concepts</li>
                  <li>Reviewed repositories and issues to improve code quality</li>
                  <li>Gained practical experience with Git workflows and version control</li>
                  <li>Collaborated with contributors from around the world</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* EXP 3 */}
        <div className="experience-content">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="experience-card">
              <div className="experience-dot"></div>
              
              <div className="experience-header">
                <div className="experience-title-group with-logo">
                  <img
                    src='/girlscript.png'
                    alt="gwoc"
                    className="experience-company-logo"
                  />
                  <div>
                    <h3 className="experience-role">Open Source Contributor</h3>
                    <div className="experience-company">
                      GirlScript Winter of Contributing
                      <span className="experience-meta">
                        Part-time · Remote
                      </span>
                    </div>
                  </div>

                  </div>
                <div className="experience-date">Sep 2021 - Dec 2021</div>
              </div>

              <div className="experience-description">
                <p>
                  Contributed to open-source projects focusing on Documentation and Data Structures 
                  and Algorithms (DSA), helping improve learning resources for beginners.
                </p>
              </div>

              <div className="experience-highlights">
                <div className="highlight-chip">
                  <FileText size={16} />
                  <span>Documentation</span>
                </div>
                <div className="highlight-chip">
                  <Github size={16} className="icon-github" color="#181717" />
                  <span>Version Control (Git)</span>
                </div>
                <div className="highlight-chip">
                  <Database size={16} />
                  <span>Data Structures and Algorithms</span>
                </div>
                <div className="highlight-chip">
                  <Search size={16} />
                  <span>Code Review</span>
                </div>
              </div>

              <div className="experience-achievements">
                <h4>Key Contributions:</h4>
                <ul>
                  <li>Enhanced and maintained technical documentation for DSA learning resources</li>
                  <li>Reviewed codebases and issue discussions to improve overall code quality</li>
                  <li>Worked with Git-based workflows including pull requests and reviews</li>
                  <li>Contributed effectively in a distributed open-source team environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;