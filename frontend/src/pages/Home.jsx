import "./Home.css";

function Home() {
  return (
    <>
    
      {/* Hero Section */}
      <section className="hero">
        <div>
        <h1>Online Learning Platform</h1>
        <p>
          We build modern websites and web applications using the latest
          technologies.
        </p>
        <button>Get Started</button>
        </div>
        <div className="hero-form">
          <form action="">
            <h2>Enrollment Form</h2>
            <label>Name</label>
            <input type="text" placeholder="Full Name" required />
             <label>Phone</label>
            <input type="tel" placeholder="Phone Number" required />
             <label>Email</label>
            <input type="email" placeholder="Email" required />
             <label>Course</label>
            <select name="course" id="">
              <option value="">Select Course</option>
              <option value="Python">Python</option>
              <option value="SQL">SQL</option>
              <option value="Django">Django</option>
              <option value="HTML+CSS">HTML+CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React JS">React JS</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Data Science">Data Science</option>
              <option value="Python Full Stack">Python Full Stack</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Courses</h2>

        <div className="course-cards">
          <div className="card">
            <h3>Python</h3>
            <p>Beginner and intermediate levels</p>
          </div>

          <div className="card">
            <h3>SQL</h3>
            <p>Database management and queries</p>
          </div>

          <div className="card">
            <h3>Django</h3>
            <p>Python web framework </p>
          </div>

          <div className="card">
            <h3>HTML+CSS</h3>
            <p>Responsive web design</p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>Dynamic web applications</p>
          </div>

          <div className="card">
            <h3>React JS</h3>
            <p>Building user interfaces</p>
          </div>

          <div className="card">
            <h3>Data Analytics</h3>
            <p>Data visualization and insights</p>
          </div>

          <div className="card">
            <h3>Data Science</h3>
            <p>Machine learning and AI</p>
          </div>

          <div className="card">
            <h3>Python Full Stack</h3>
            <p>Responsive web design</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
