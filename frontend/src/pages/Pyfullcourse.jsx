import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function PyfullCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>Python Full-Stack Syllabus</h2>
      <p>Duration: 3-4 Months • Fee: ₹14,999</p>

      <ul className="course-list">
        <li>Python & Django</li>
        <li>HTML,CSS,JavaScript</li>
        <li>ReactJS</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
        <li>Real-Time Project</li>
        <li>Interview Preparation</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default PyfullCourse;
