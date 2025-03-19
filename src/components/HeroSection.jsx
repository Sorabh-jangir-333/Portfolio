import React from "react";
import "./HeroSection.css"; // Import the CSS file
import profileImage from "./profile_photo.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
      
        <div className="hero-content">
          <div className="text-content">
            <h2>
              Hey, I Am <span className="highlight">Sorabh.</span>
            </h2>
            <p className="description">I design beautifully simple things,<br></br>and I love what I do.</p>
            <div className="experience">
              <br /><br /><br /><br />
              <p className="asp"> Aspiring</p>
              <p className="years">Software Engineer</p>
            </div>
          </div>
          <div className="image-content">
            <img src={profileImage} alt="Sorabh" className="profile-img" />
            {/* <div className="reviews">
              <p>12k Reviews On</p>
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="rating">4.9</p>
            </div> */}
          </div>
        </div>
        <p className="creative-tagline">Creative <span>Programmer</span>.</p>
      </div>
    </section>
  );
};

export default HeroSection;
