import { useState } from "react";
import "./Enrollform.css";

function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwKpF8plgGqKdB2szqtG9rBlaAIAsZlPQh9A4CJmsogm9E7oXIe5wsySxpJSSGcepBP/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", course: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero">
      <div className="hero-form">
        <div className="form-header">
          <h2>Enrollment</h2>
          {/* <p>Fill the details and our team will contact you</p> */}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label>Full Name</label> */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Phone Number</label> */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Email Address</label> */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Course</label> */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option>Python</option>
              <option>SQL</option>
              <option>Django</option>
              <option>HTML + CSS</option>
              <option>JavaScript</option>
              <option>React JS</option>
              <option>Data Analytics</option>
              <option>Data Science</option>
              <option>Python Full Stack</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Enrollment"}
          </button>
        </form>

        {success && (
          <div className="success-msg">
            ✔ Enrollment submitted successfully
          </div>
        )}
      </div>
    </section>
  );
}

export default EnrollForm;
