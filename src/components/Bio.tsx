import React from "react";
import ProfileImage from "./ProfileImage";
import { usePersonalInfo, useEducation } from "../hooks/usePersonalData";
import "../styles/Bio.css";

const AboutMe: React.FC = () => {
  const { personalInfo, loading: personalLoading } = usePersonalInfo();
  const { education, loading: educationLoading } = useEducation();

  if (personalLoading || educationLoading) {
    return (
      <section id="bio" className="bio-section">
        <div className="container">
          <div className="bio-content">
            <div className="loading-spinner">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="bio" className="bio-section">
      <div className="container">
        <div className="bio-content">
          <div className="bio-header">
            <ProfileImage
              src={personalInfo?.profileImage || "/profile.jpg"}
              alt={`${personalInfo?.name} Profile Picture`}
              size="large"
            />
            <h1 className="bio-name">{personalInfo?.name}</h1>
            <p className="bio-title">{personalInfo?.title}</p>
            <div className="bio-divider"></div>
          </div>
          <div className="bio-details">
            {personalInfo?.bio && (
              <p className="bio-description">{personalInfo.bio}</p>
            )}
            <p className="bio-field">
              <strong>Field:</strong> {education?.field}
            </p>
            <p className="bio-institution">
              <strong>Institution:</strong> {education?.institution}{" "}
              <a
                href={education?.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bio-link"
              >
                ({education?.institutionAbbr})
              </a>
            </p>
            {education?.degree && (
              <p className="bio-degree">
                <strong>Degree:</strong> {education.degree} • {education.status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
