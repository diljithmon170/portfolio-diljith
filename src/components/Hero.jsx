import { Container } from 'react-bootstrap';
import proPic from "../assets/pro_pic.jpeg";
import res from "../assets/Diljith_D_Resume.pdf";
import '../App.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container fluid className="hero-container">
        {/* LEFT: Text Content */}
        <div className="hero-text">
          <span className="hero-greeting">
            Hello I'm
          </span>

          <h1 className="hero-title">
            Diljith D
          </h1>

          <h3 className="hero-role">
            Software Developer
          </h3>

          <div>
            <p className="hero-contact">
              <i className="bi bi-envelope" style={{ color: '#2dd4bf', marginRight: '10px' }}></i>
              diljithmon170@gmail.com
            </p>
            <p className="hero-location">
              <i className="bi bi-geo-alt" style={{ color: '#2dd4bf', marginRight: '10px' }}></i>
              Palakkad, Kerala
            </p>
            <div className='btn-space'>
            
              <a href='#projects'
              className="github-btn">
            View Projects
          </a>
            <a href={res}
              className="github-btn">
            Download Resume
          </a>
          </div>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="hero-profile-img-wrapper">
          <img
            src={proPic}
            alt="Profile"
            className="hero-profile-img"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;