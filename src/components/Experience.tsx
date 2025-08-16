import React from "react";
import { useExperiences } from "../hooks/usePersonalData";
import "../styles/Experience.css";

const Experience: React.FC = () => {
  const { experiences, loading } = useExperiences();

  if (loading) {
    return (
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="loading-spinner">Loading experiences...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <div className="experience-item" key={experience.id}>
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3 className="company-name">{experience.company}</h3>
                <h4 className="job-title">{experience.position}</h4>
                <p className="duration">
                  <strong>
                    {experience.startDate} - {experience.endDate}
                  </strong>
                  {experience.location && (
                    <span className="location"> • {experience.location}</span>
                  )}
                </p>
                {experience.description && (
                  <p className="job-description">{experience.description}</p>
                )}
                <div className="job-details">
                  {experience.responsibilities.map(
                    (responsibility, index) =>
                      responsibility.trim() && (
                        <p key={index}>{responsibility}</p>
                      )
                  )}
                </div>
                {experience.technologies.length > 0 && (
                  <div className="technologies">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
