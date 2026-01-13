import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

function DjangoCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-page">
      
      {/* Back Icon */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="course-icon">🗄️</div>
      <h2>Django Syllabus</h2>
      <p>Duration: 30 Days • Fee: ₹2,499</p>

      <ul className="course-list">
        <li>Django Introduction and Setup</li>
        <li>Project Structure</li>
        <li>Models, Views, and Templates</li>
        <li>URL Routing</li>
        <li>Forms & Validation</li>
        <li>ORM & Database</li>
        <li>Authentication & Authorization</li>
        <li>CRUD Operations</li>
        <li>REST API Basic</li>
        <li>Mini Project</li>
      </ul>

      <Link className="course-btn" to="/">Enroll Now</Link>
    </div>
  );
}

export default DjangoCourse;
