import "./Homehero.css";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HomeImg from "../assets/image.png";
import PyImg from "../assets/python-course.webp";
import SqlImg from "../assets/sql-courses.webp";
import DjangoImg from "../assets/django-courses.webp";
import FullstackImg from "../assets/fullstack-course.webp";
import JsImg from "../assets/js-course.webp";
import DataaImg from "../assets/data-science-course.webp";
import DatasImg from "../assets/data-science-course.webp";
import PyfullImg from "../assets/fullstack-course.webp";  
function Homehero() {
 const navigate = useNavigate();

   const reviews = [
  {
    text: "The Digital Marketing course at Bolt Academy was a game-changer for me.",
    name: "PRIYA S.",
    course: "Digital Marketing Crash Course",
  },
  {
    text: "The instructors were very supportive and explained everything clearly.",
    name: "RAHUL C.",
    course: "Digital Marketing Crash Course",
  },
  {
    text: "Well-structured classes with real-time projects.",
    name: "SNEHA R.",
    course: "Full Stack Development",
  },
  {
    text: "Mentors helped me gain confidence and industry exposure.",
    name: "ARUN K.",
    course: "Web Development",
  },
  {
    text: "Beginner friendly and practical oriented teaching.",
    name: "MEENA P.",
    course: "Digital Marketing",
  },
];


const allReviews = [...reviews, ...reviews];


const trackRef = useRef(null);
const [position, setPosition] = useState(0);

useEffect(() => {
  const speed = 0.3; 
  let animationFrame;

  const move = () => {
    setPosition((prev) => {
      const cardWidth =
        trackRef.current.children[0].offsetWidth + 30;

      
      if (prev >= cardWidth * reviews.length) {
        return 0;
      }
      return prev + speed;
    });

    animationFrame = requestAnimationFrame(move);
  };

  animationFrame = requestAnimationFrame(move);

  return () => cancelAnimationFrame(animationFrame);
}, []);

useEffect(() => {
  if (!trackRef.current) return;
  trackRef.current.style.transform = `translateX(-${position}px)`;
}, [position]);


    return (
        <>
        {/* Hero Section */}    
    <section className="heropage">
  {/* LEFT CONTENT */}

    <div className="home-left">
    <p>🚀 Transform Your Career</p>
    <h1>
      Upgrade Your Career with <span style={{ color: "#ff6600" }}>CodeSpark  Academy’s</span> Expert Courses
    </h1>
    <p>
      Master programming with India’s most innovative online platform.
      Get expert mentorship, hands-on projects, and placement support.  
    </p>
    <div>
        <button className="slbut">Start Learning →</button>
       <button
  className="viewbut"
  onClick={() =>
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth"
    })
  }
>View Courses</button>
    </div>
    </div>
    <div className="hero-right">
        <img className="heroimg" src={HomeImg} alt="" />
    </div> 
</section>

{/*courses cards*/}
 <section className="courses" id="courses">
        <h2>Our Special <span style={{color:"#ff7a00"}}>Courses</span></h2>

        <div className="course-cards">
          <div className="card">
            <img src={PyImg} alt="" />
            <h3>Python</h3>
            <p>From fundamentals to advanced concepts.</p>
            <Link to="/python" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={SqlImg} alt="" />
            <h3>Python, SQL</h3>
            <p>Database management and queries</p>
            <Link to="/sql" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={DjangoImg} alt="" />
            <h3>Python, SQL, Django</h3>
            <p>Python web framework</p>
            <Link to="/django" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={FullstackImg} alt="" />
            <h3>Web Development</h3>
            <p>Build responsive websites</p>
            <Link to="/htmlcss" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={JsImg} alt="" />
            <h3>Frontend Development</h3>
            <p>Dynamic web applications</p>
            <Link to="/js" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={DataaImg} alt="" />
            <h3>Data Analytics</h3>
            <p>Data visualization and insights</p>
            <Link to="/dataa" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={DatasImg} alt="" />
            <h3>Data Science</h3>
            <p>Analytics and machine learning</p>
            <Link to="/datas" className="course-link">course details</Link>
          </div>

          <div className="card">
            <img src={PyfullImg} alt="" />
            <h3>Python Full Stack</h3>
            <p>Frontend + Backend mastery</p>
            <Link to="/pyfull" className="course-link">course details</Link>
          </div>
        </div>
      </section>


{/*working process section */}
<section className="working-process">
  <div className="container">

    <span className="process-tag">Working Process</span>
    <h2 className="process-title">
      How does it <span>Work</span>
    </h2>

    <div className="process-cards">

      { /* Card 1 */ }
      <div className="process-card">
        <div className="icon">👆</div>
        <h3>Pick Your <span>Course</span></h3>
        <p>
          Select the course that aligns with your interests and career goals
        </p>
      </div>

      { /* Card 2 */ }
      <div className="process-card">
        <div className="icon">📚</div>
        <h3>Start <span>Learning</span></h3>
        <p>
          Engage with practical lessons and real-world projects to develop valuable skills
        </p>
      </div>

      { /* Card 3 */ }
      <div className="process-card">
        <div className="icon">💼</div>
        <h3>Get <span>Placed</span></h3>
        <p>
          Leverage your knowledge to successfully secure a placement and advance your career
        </p>
      </div>

    </div>
  </div>
</section>


 {/* homeHero bottom Section */}   
<section className="homehero-bottom">
    <div className="homehero-text">
        <h1>Why Choose <span style={{ color: "#0046aeff" }}>Code</span><span style={{ color: "#ff6600" }}>Spark</span> Academy?</h1>
        <p>At CodeSpark Academy, we blend expert mentorship with practical training to help you thrive in today’s tech world. With flexible learning, real-world projects, and recognized certifications, we prepare you for career success.</p>
    </div>
    <div>
        <button className="corbut"
        onClick={() =>
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth"
    })
  }
        >View Courses</button>
    </div>
</section>

{/* REVIEW SECTION */}
<section className="review-section">
  <div className="container">

    <span className="review-tag">Reviews</span>
    <h2 className="review-title">
      <span>Feedback</span> From Our Students
    </h2>

    <div className="review-slider">
  <div className="review-track" ref={trackRef}>
    {allReviews.map((item, i) => (
      <div className="review-card" key={i}>
        <p>{item.text}</p>
        <h4>{item.name}</h4>
        <span className="course">
          Course: {item.course}
        </span>
      </div>
    ))}
  </div>
</div>

  </div>
</section>
</>

    )
}
export default Homehero;