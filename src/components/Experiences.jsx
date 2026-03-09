import React from 'react'

const Experiences = () => {
  return (
    <section id = "experiences" className='projects'>
        <h1 className='projects-title'>
            Experiences
        </h1>
        <div className="timeline">

        <div className="timeline-item">
          <h3>AI/ML Developer Intern</h3>
          <span className="company">RYL NeuroAcademy</span>
          <span className="year">Aug 2025 – Nov 2025</span>

          <p>
            Worked on machine learning model development,
            dataset preprocessing using Pandas and NumPy,
            and integrated LLM based AI services into web applications.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Generative AI Intern</h3>
          <span className="company">Prodigy InfoTech</span>
          <span className="year">Jul 2025</span>

          <p>
            Worked on GPT-2 fine-tuning, prompt engineering,
            and text-to-image generation using Stable Diffusion
            and DALL·E Mini while experimenting with transformer and 
            diffusion models.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Experiences