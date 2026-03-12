import { useState, useEffect } from "react";

function AppNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications"},
    { id: "experiences", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 70;

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (
        section &&
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveLink(link.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Hamburger button */}
        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link ${
                activeLink === link.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default AppNavbar;