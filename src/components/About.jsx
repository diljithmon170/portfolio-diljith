import '../App.css';

const About = () => {
  return (
    <section id="about" className="about-border">
      <div className="about-body">

        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          I am a passionate <span>Full Stack Developer</span> interested in building
          scalable web applications and <span>AI-powered solutions</span>.
          I work with technologies like <span>Python, Django, FastAPI, React.js</span>,
          and modern web tools to build responsive and user-friendly applications.
        </p>

        <p className="about-text">
          During my internship as an <span>AI/ML Developer</span> at RYL NeuroAcademy,
          I worked on dataset preparation, machine learning models, and AI integrations
          using <span>Pandas, NumPy, and LLMs</span>.
        </p>

        {/* Skills */}
        <div className="about-skills">
          <span>React</span>
          <span>FastAPI</span>
          <span>Django</span>
          <span>Python</span>
          <span>Machine Learning</span>
        </div>

        {/* Education Section */}
        <div className="education-section">
  <h2 className="education-title">Education</h2>

  <div className="education-item">
    <div className="education-left">
      <h3>
        Bachelor of Technology in Computer Science and Engineering 
        <span className="edu-extra">(Lateral Entry)</span>
      </h3>
      <p>College of Engineering, Chengannur</p>
    </div>
    <div className="education-year">2022 – 2025</div>
  </div>

  <div className="education-item">
    <div className="education-left">
      <h3>Diploma in Computer Engineering</h3>
      <p>St. Mary’s Polytechnic College, Palakkad</p>
      <p className="cgpa">CGPA: 8.4 / 10</p>
    </div>
    <div className="education-year">2019 – 2022</div>
  </div>
</div>

      </div>
    </section>
  )
}

export default About