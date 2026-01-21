import "./PythonCourse.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PyfullCourse() {
  const navigate = useNavigate();

  return (
    <div className="course-overlay">
      <div className="course-modal">
        
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        {/* Icon */}
        <div className="course-icon"> 🟨</div>

        <h2 className="course-title">JavaScript</h2>

        {/* Duration & Fee */}
        <div className="course-stats">
          <div className="stat-box">
            <span>⏱ Duration</span>
            <strong>20 Days</strong>
          </div>
          <div className="stat-box">
            <span>💰 Course Fee</span>
            <strong>₹1,499</strong>
          </div>
        </div>

        {/* Features */}
        <div className="features-box">
          <h4>✨ Special Features & Support</h4>
          <div className="features-grid">
            <div>🎯 Placement Assistance</div>
            <div>📞 24×7 Support</div>
            <div>👨‍🏫 Industry Experts</div>
            <div>📜 Certification</div>
          </div>
        </div>

        {/* Syllabus */}
        <h4 className="syllabus-title">📘 Course Syllabus</h4>
        <ul className="course-list">
          <li>JavaScript Basics</li>
          <li>Variables & Functions</li>
          <li>Conditions & Loops</li>
          <li>Arrays & Objects</li>
          <li>DOM Manipulation</li>
          <li>Events</li>
          <li>ES6 Basics</li>
          <li>Mini Projects</li>
        </ul>

        {/* Button */}
        <button className="course-btn">Enroll Now</button>
      </div>
    </div>
  );
}

export default PyfullCourse;
