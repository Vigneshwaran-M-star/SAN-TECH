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
        <div className="course-icon">🌐</div>

        <h2 className="course-title">HTML + CSS</h2>

        {/* Duration & Fee */}
        <div className="course-stats">
          <div className="stat-box">
            <span>⏱ Duration</span>
            <strong>15 Days</strong>
          </div>
          <div className="stat-box">
            <span>💰 Course Fee</span>
            <strong>₹999</strong>
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
        <li>HTML Tags & Structure</li>
        <li>Forms & Tables</li>
        <li>CSS Basics & Box Model</li>
        <li>Flex & Grid</li>
        <li>Responsive Design</li>
        <li>Website Layout Project</li>
      </ul>

        {/* Button */}
        <button className="course-btn">Enroll Now</button>
      </div>
    </div>
  );
}

export default PyfullCourse;
