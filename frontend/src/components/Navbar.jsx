import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-logo">
          <img src="./src/assets/logo.png" alt="Logo" className="logo-image" />
          <h1 style={{ color: "#ff6600" ,fontWeight: "bold"}}><span style={{ color: "#213047ff" }}>Code</span>Spark</h1>
        </div>
        <div className="navbar-menu">
            <div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Courses</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/about">Contact</Link>
                </li>                
            </ul>
            </div>
            <div className="navbar-auth">
            <button className="enroll-button">Enroll Now</button>          
        </div>
        </div>
        
    </nav>
    </>
  );
}

export default Navbar;
