import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
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
        <div>
          <h1>Online Learning Platform</h1>
          <p>We build modern websites and web applications.</p>
          <button>Get Started</button>
        </div>

        <div className="hero-form">
         

          <form onSubmit={handleSubmit}>
            <h2>Enrollment Form</h2>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <label>Course</label>
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
              <option>HTML+CSS</option>
              <option>JavaScript</option>
              <option>React JS</option>
              <option>Data Analytics</option>
              <option>Data Science</option>
              <option>Python Full Stack</option>
            </select>

            <button type="submit">Submit</button>
          </form>
           {success && (
            <div className="success-msg">
              ✅ Enrollment submitted successfully!
            </div>
          )}
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <h2>Courses</h2>

        <div className="course-cards">
          <div className="card">
            <img src="src/assets/python.webp" alt="" />
            <h3>Python</h3>
            <p>From fundamentals to advanced concepts.</p>
            <Link to="/python" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/sql.avif" alt="" />
            <h3>Python, SQL</h3>
            <p>Database management and queries</p>
            <Link to="/sql" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/django.jpg" alt="" />
            <h3>Python, SQL, Django</h3>
            <p>Python web framework</p>
            <Link to="/django" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/htmlcss.jpg" alt="" />
            <h3>Web Development</h3>
            <p>Build responsive websites</p>
            <Link to="/htmlcss" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/js.jpg" alt="" />
            <h3>Frontend Development</h3>
            <p>Dynamic web applications</p>
            <Link to="/js" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/dataanalytics.png" alt="" />
            <h3>Data Analytics</h3>
            <p>Data visualization and insights</p>
            <Link to="/dataa" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/datascience.webp" alt="" />
            <h3>Data Science</h3>
            <p>Analytics and machine learning</p>
            <Link to="/datas" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src="src/assets/fullstack.jpg" alt="" />
            <h3>Python Full Stack</h3>
            <p>Frontend + Backend mastery</p>
            <Link to="/pyfull" className="course-link">course details</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
