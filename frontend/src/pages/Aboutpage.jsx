import React from "react";
import "./Aboutpage.css";

export default function Aboutpage() {
  return (
    <div className="about-container">
    <div className="fbox1">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Best Training Institute in Chennai</p>
      </div>

      <div className="about-content">
        <div className="about-text" id="aboutcon">
          <h3>Learn New Skills Online With Top Educators</h3>
          <p>
            Welcome to CodeSpark, a premier training institute in Chennai 
            focused on delivering high-quality education across multiple 
            software technologies. Our goal is to prepare students with the
            practical skills and technical expertise needed to thrive in
            today’s fast-evolving IT industry.
          </p>
          <p>
            At CodeSpark, we provide comprehensive software training programs
            in Python, Java, Web Development, and other in-demand technologies.
            With guidance from experienced instructors, hands-on learning, and
            real-time project exposure, students gain the confidence to apply 
            their knowledge in real-world scenarios.
          </p>
          <p>Known for our learner-centric approach, CodeSpark offers modern
             facilities, expert mentorship, and an industry-relevant curriculum.
             Join CodeSpark and take a decisive step toward a rewarding and 
             successful career in software development.
          </p>  
        </div>

        {/* <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Our Team"
          />
        </div> */}
      </div>
      </div>
    </div>
  );
}
