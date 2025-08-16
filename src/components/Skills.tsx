import React from "react";
import { useSkills } from "../hooks/usePersonalData";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  const { skills, loading } = useSkills();

  if (loading) {
    return (
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="loading-spinner">Loading skills...</div>
        </div>
      </section>
    );
  }

  if (!skills) return null;

  const skillCategories = [
    { title: "Programming Languages", items: skills.languages, icon: "💻" },
    { title: "Frontend", items: skills.frontend, icon: "🎨" },
    { title: "Backend", items: skills.backend, icon: "⚙️" },
    { title: "Database", items: skills.database, icon: "🗃️" },
    { title: "Cloud & DevOps", items: skills.cloud, icon: "☁️" },
    { title: "Tools", items: skills.tools, icon: "🔧" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
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
