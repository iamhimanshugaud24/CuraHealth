import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            CuraHealth, located in Vrindavan Nagar, Bhopal, has been providing trusted 
            healthcare since 1995. With 100+ expert doctors and 24/7 emergency services, 
            we serve over 50,000 patients yearly, offering advanced medical care across 
            multiple specialties with a focus on comfort, safety, and personalized treatment.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
                 </div>
      </div>
    </>
  );
};

export default Hero;
