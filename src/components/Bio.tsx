import React from "react";
import "../styles/Bio.css";

const AboutMe: React.FC = () => {
  return (
    <section id="bio" className="bio-section">
      <div className="container">
        <div className="bio-content">
          <div className="bio-header">
            <h1 className="bio-name">Teeramet Kantima</h1>
            <div className="bio-divider"></div>
          </div>
          <div className="bio-details">
            <p className="bio-field">
              <strong>Field:</strong> Engineering and Technology | Digital
              Information and Technology (DIT)
            </p>
            <p className="bio-institution">
              <strong>Institution:</strong> Panyapiwat Institute of Management{" "}
              <a
                href="https://pim.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="bio-link"
              >
                (PIM)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
