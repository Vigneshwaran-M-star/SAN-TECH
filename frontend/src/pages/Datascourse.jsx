import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function DatasCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>Data Science Syllabus</h2>
      <p>Duration: 45 Days • Fee: ₹4,999</p>

      <ul className="course-list">
        <li>Python for Data Science</li>
        <li>NumPy & Pandas</li>
        <li>Data Analysis</li>
        <li>Data Visualization</li>
        <li>Statistics Basics</li>
        <li>Machine Learning Introduction</li>
        <li>Mini Project</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default DatasCourse;
