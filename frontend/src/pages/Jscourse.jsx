import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function JsCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>JavaScript Syllabus</h2>
      <p>Duration: 20 Days • Fee: ₹1,499</p>

      <ul className="course-list">
        <li>JavaScript Basics</li>
        <li>Variables & Functions</li>
        <li>Conditions & Loops</li>
        <li>Array & Objects</li>
        <li>DOM Manipulation</li>
        <li>Events</li>
        <li>ES6 Basics</li>
        <li>Mini Projects</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default JsCourse;
