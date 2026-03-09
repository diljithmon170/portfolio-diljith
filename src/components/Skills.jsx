import { useState } from "react";

const Skills = () => {
  const [activeSkills, setSkills] = useState("tech");

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h1 className="skills-title">Skills</h1>

        {/* Buttons */}
        <div className="skills-buttons">

          <button
            className={activeSkills === "tech" ? "active-btn" : ""}
            onClick={() => setSkills("tech")}
          >
            Technical Skills
          </button>

          <button
            className={activeSkills === "soft" ? "active-btn" : ""}
            onClick={() => setSkills("soft")}
          >
            Soft Skills
          </button>

        </div>

        {/* Skills List */}
        {activeSkills === "tech" ? (
          <div key={activeSkills} className="skills-list slide-in">
            <p>React JS</p>
            <p>Django</p>
            <p>FastAPI</p>
            <p>Python</p>
            <p>MySQL</p>
            <p>HTML5</p>
            <p>CSS3</p>
          </div>
        ) : (
          <div key={activeSkills} className="skills-list slide-in">
            <p>Communication</p>
            <p>Problem Solving</p>
            <p>Team Collaboration</p>
            <p>Time Management</p>
            <p>Adaptability</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;