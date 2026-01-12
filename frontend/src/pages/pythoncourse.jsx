import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PythonCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🐍</div>
      <h2>Python Syllabus</h2>
      <p>Duration: 30 Days • Fee: ₹1,499</p>

      <ul>
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

      <button className="course-btn">View Details</button>
    </div>
  );
}

export default PythonCourse;
