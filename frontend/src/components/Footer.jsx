import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../assets/logo.png";


import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <>
    <footer className="footer1">
      <div className="fbox">

        {/* LOGO / ABOUT */}
        <div className="footer-top">
          <div className="footer-t">
            <img src={footerLogo} id="footerimg" alt="CodeSpark Logo" />
            <h3 className="footer-title"><span style={{ color: "#213047ff" }}>Code</span>Spark</h3>
          </div>

          <p className="footer-desc">
            CodeSpark is a Online learning platform focused on web development,
        Python, and real-world projects.
          </p>
          
          {/* FOLLOW US – ICON ONLY */}
        <div className="footer-menu">
          <ul className="follow-us">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaWhatsapp /></a></li>
          </ul>
        </div>
        </div>

        {/*about us */}
        <div className="footer-menu">
          <h5>About Us</h5>
          <ul><a href="#">About Us</a></ul>
          <ul><a href="#">Courses</a></ul>
        </div>

        {/*company */}
        <div className="footer-menu">
          <h5>Company</h5>
          <ul><a href="#">Programing</a></ul>
          <ul><a href="#">Design & creatives</a></ul>
          <ul><a href="#">Programing</a></ul>
        </div>

        {/* CONNECT */}
        <div className="footer-menu">
          <h5>Contacts</h5>
          <ul>
            <li>
              <a href="tel:+919025353470">
                <FaPhoneAlt /> +91 90253 53470
              </a>
            </li>
            <li>
              <a href="mailto:vigneshwaran2618@gmail.com">
                <MdEmail /> vigneshwaran2618@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <FaMapMarkerAlt /> Tamil Nadu, India
              </a>
            </li>
          </ul>
        </div>

      </div>

      
    </footer>

    <footer className="footer2">
      <div className="bottom-footer">
        <p id="year">© 2026 CodeSpark. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
}
