import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function HtmlcssCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>HTML & CSS Syllabus</h2>
      <p>Duration: 15 Days • Fee: ₹999</p>

      <ul className="course-list">
        <li>HTML Tags & Structure</li>
        <li>Forms & Tables</li>
        <li>CSS Basics & Box Model</li>
        <li>Flex & Grid</li>
        <li>Responsive Design</li>
        <li>Website Layout Project</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default HtmlcssCourse;
