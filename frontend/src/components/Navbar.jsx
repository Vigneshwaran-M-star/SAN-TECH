import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const modalRef = useRef(null);

  // disable background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showModal]);

  // form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwOvvrlN2GVaB1hv57tKhhAk3rN1tjzTN55wuQN6Nv6PI__lnCH81Sy5NycAU-fs7iC/exec",
        {
          method: "POST",
          body: form
        }
      );

      // show success message
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "" });

      // auto close modal
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 2500);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
          <h1>
            <span style={{ color: "#003893" }}>Code</span>
            <span style={{ color: "#ff6600" }}>Spark</span>
          </h1>
        </div>

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

          <button
            className="enroll-button"
            onClick={() => {
              setShowModal(true);
              setSuccess(false);
            }}
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setShowModal(false)}>
              ×
            </span>

            <h2>Register</h2>

            {success && (
              <p className="success-msg">
                🎉 Registration Successful! We’ll contact you soon.
              </p>
            )}

            {!success && (
              <form className="register-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Register</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
