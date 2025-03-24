import React from 'react';
import useExperienceData from '../state/experienceState';
import '../styles/Experience.css'

const Experience: React.FC = () => {
      const [experiences] = useExperienceData();

  return (
    <div id="Employment">
      <h3>
        <span className="tableHead">Work Experience</span>
      </h3>

      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
            <h3>{experience.Company}</h3>
            <h4>{experience.JobName}</h4>
            <p><strong>{experience.StartDate} - {experience.EndDate}</strong> </p>
             <div>
            {experience.Detail.split("\n").map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
