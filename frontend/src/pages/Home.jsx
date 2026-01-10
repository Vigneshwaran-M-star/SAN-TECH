import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Online Learning Platform</h1>
        <p>
          We build modern websites and web applications using the latest
          technologies.
        </p>
        <button>Get Started</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Responsive and scalable websites</p>
          </div>

          <div className="card">
            <h3>UI / UX Design</h3>
            <p>Modern and user-friendly designs</p>
          </div>

          <div className="card">
            <h3>Backend Development</h3>
            <p>Secure APIs and databases</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
