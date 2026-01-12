import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./src/assets/logo.png" alt="Logo" className="logo-image" />
          <h1 style={{ color: "#ff6600", fontWeight: "bold" }}>
            <span style={{ color: "#213047ff" }}>Code</span>Spark
          </h1>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#courses">Courses</a></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/about">Contact</Link></li>
          </ul>

          <div className="navbar-auth">
            <button className="enroll-button" onClick={() => setShowModal(true)}>
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
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
