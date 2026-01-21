import { useState } from "react";
import "./Enrollform.css";
import { Link } from "react-router-dom";

function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: ""
  });

  const [success, setSuccess] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwKpF8plgGqKdB2szqtG9rBlaAIAsZlPQh9A4CJmsogm9E7oXIe5wsySxpJSSGcepBP/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        course: ""
      });

      // auto hide success message
      setTimeout(() => setSuccess(false), 3000);

    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <>
      {/* Hero Section */}
    <section className="hero">
  {/* RIGHT FORM */}
  <div className="hero-form">
    <form onSubmit={handleSubmit}>
      <h2>Enroll Now</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
      >
        <option value="">Select Course</option>
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

      <button type="submit">Submit Enrollment</button>
    </form>

    {success && (
      <div className="success-msg">
        ✅ Enrollment submitted successfully!
      </div>
    )}
  </div>
</section>
    </>
  );
}

export default EnrollForm;