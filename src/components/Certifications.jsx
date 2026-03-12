import React from 'react'

function Certifications() {
  const certifications = [
  {
    title: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle",
    year: "2025",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.kaggle.com%2Fcertification%2Fbadges%2Fdiljithd%2F105&urlhash=Dktr&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BiD60bVq%2FR9mVSzvZ6L7xQA%3D%3D"
  },
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    year: "2024",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Farchive.nptel.ac.in%2Fcontent%2Fnoc%2FNOC24%2FSEM2%2FEcertificates%2F106%2Fnoc24-cs113%2FCourse%2FNPTEL24CS113S85870016804003174.pdf&urlhash=rhNs&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BiD60bVq%2FR9mVSzvZ6L7xQA%3D%3D"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    year: "2025",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F4GZMGEBXMO9A&urlhash=Q0pP&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BiD60bVq%2FR9mVSzvZ6L7xQA%3D%3D"
  },
  {
    title: "Data Analytics with Generative AI",
    issuer: "Simplilearn",
    year: "2025",
    link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fsimpli-web.app.link%2Fe%2Fpcaix7fqaWb&urlhash=NpFT&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BiD60bVq%2FR9mVSzvZ6L7xQA%3D%3D"
  }
]
  return (
    <section id = 'certifications' className='skills'>
      <div className='skills-container'>
        <h1 className='skills-title'>Certifications</h1>
        <div className="cert-grid">
  {certifications.map((cert, index) => (
    <div className="cert-card" key={index}>
      <h3>{cert.title}</h3>
      <p>{cert.issuer}</p>
      <p>{cert.year}</p>
      <a href={cert.link}>View Credential</a>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default Certifications