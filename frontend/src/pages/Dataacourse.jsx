import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function DataaCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>Data Analytics Syllabus</h2>
      <p>Duration: 20 Days • Fee: ₹2,999</p>

      <ul className="course-list">
        <li>Excel Basics</li>
        <li>SQL for Analytics</li>
        <li>Data Cleaning</li>
        <li>Data Visualization</li>
        <li>Power BI/Tableau Basics</li>
        <li>Real-Time Case Studies</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default DataaCourse;
