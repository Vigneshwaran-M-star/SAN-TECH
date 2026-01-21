import "./Footer.css";
import footerLogo from "../assets/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* LOGO */}
          <div className="footer-col">
            <div className="footer-img">
            <img src={footerLogo} alt="CodeSpark" className="footer-logo" />
            <h2><span style={{color:"#003893ff"}}>Code</span>Spark</h2>
            </div>
            <p className="footer-text">
              Bridge of Learning Technology
            </p>

            <div className="social-icons">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>

          
          <div className="footer-col">
            <h1><span style={{color:"white"}}>Quick</span> Links</h1>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>

          
          <div className="footer-col">
            <h1><span style={{color:"white"}}>Popular</span> Courses</h1>
            <a href="#">Python</a>
            <a href="#">Full Stack Development</a>
            <a href="#">Data Analytics</a>
          </div>

          
          <div className="footer-col">
            <h1><span style={{color:"white"}}>Contact</span> us</h1>
            <p><FaPhoneAlt /> +9190253 53470</p>
            <p><MdEmail /> vigneshwaran2618@gmail.com</p>
            <p><FaMapMarkerAlt />Chennai, Tamil Nadu, India</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>© 2026 CodeSpark. All Rights Reserved</p>
          <div className="footer-links">
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}
