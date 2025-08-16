import React from "react";
import useExperienceData from "../state/experienceState";
import "../styles/Experience.css";

const Experience: React.FC = () => {
  const [experiences] = useExperienceData();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3 className="company-name">{experience.Company}</h3>
                <h4 className="job-title">{experience.JobName}</h4>
                <p className="duration">
                  <strong>
                    {experience.StartDate} - {experience.EndDate}
                  </strong>
                </p>
                <div className="job-details">
                  {experience.Detail.split("\n").map(
                    (detail, detailIndex) =>
                      detail.trim() && <p key={detailIndex}>{detail}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
