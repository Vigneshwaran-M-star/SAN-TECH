import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SqlCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🐍</div>
      <h2>SQL Syllabus</h2>
      <p>Duration: 10 Days • Fee: ₹999</p>

      <ul>
        <li>Database & RDBMS Basics</li>
        <li>SELECT, INSERT, UPDATE, DELETE</li>
        <li>WHERE, ORDER BY</li>
        <li>GROUP BY, HAVING</li>
        <li>JOINS</li>
        <li>Subqueries</li>
        <li>Constraints & Keys</li>
        <li>Real-time Queries</li>
      </ul>

      <button className="course-btn">View Details</button>
    </div>
  );
}

export default SqlCourse;
