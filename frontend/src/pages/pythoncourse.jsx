import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function PythonCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      {/* Content */}
      <div className="course-content">
        <div className="course-icon">🐍</div>

        <h2>Python Syllabus</h2>
        <p className="course-info">Duration: 30 Days • Fee: ₹1,499</p>

        <ul className="course-list">
          <li>Introduction to Python and Setup</li>
          <li>Variables & Data Types</li>
          <li>Operators</li>
          <li>if / elif / else</li>
          <li>Loops (for, while)</li>
          <li>Functions</li>
          <li>Lists, Tuples, Sets, Dictionaries</li>
          <li>Strings & File Handling</li>
          <li>Basics of OOPS</li>
          <li>Mini Projects</li>
          <li>Interview Questions</li>
        </ul>

        <Link className="course-btn" to="/">Enroll Now</Link>
      </div>
    </div>
  );
}

export default PythonCourse;
