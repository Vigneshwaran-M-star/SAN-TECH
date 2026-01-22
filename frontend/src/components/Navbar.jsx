import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./src/assets/logo.png" alt="Logo" className="logo-image" />
          <h1>
            <span style={{ color: "#003893" }}>Code</span>
            <span style={{ color: "#ff6600" }}>Spark</span>
          </h1>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <button className="enroll-button" onClick={() => setShowModal(true)}>
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>×</span>
            <h2>Register</h2>

            <form className="register-form">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
