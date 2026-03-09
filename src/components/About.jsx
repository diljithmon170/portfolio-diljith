import '../App.css';

const About = () => {
  return (
    <section id = "about" className='about-border'>
    <div className='about-body'>
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

    <div className="about-skills">
      <span>React</span>
      <span>FastAPI</span>
      <span>Django</span>
      <span>Python</span>
      <span>Machine Learning</span>
    </div>

  </div>
</section>
  )
}

export default About