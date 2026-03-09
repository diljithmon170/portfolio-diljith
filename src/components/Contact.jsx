import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h1 className="contact-title">Contact</h1>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">

          <p>
            <FaEnvelope className="contact-icon" />
            diljithmon170@gmail.com
          </p>

          <p>
            <FaLinkedin className="contact-icon" />
            linkedin.com/in/diljith
          </p>

          <p>
            <FaMapMarkerAlt className="contact-icon" />
            Kerala, India
          </p>

        </div>

        {/* Contact Form */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* Footer */}
      <div className="footer">
        © {new Date().getFullYear()} Diljith. All rights reserved.
      </div>

    </section>
  );
}

export default Contact;