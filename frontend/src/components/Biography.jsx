import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p><b>Key Highlights</b></p>
          {/* <h3>Who We Are</h3> */}
        <p>Founded in 1995, CuraHealth has been providing trusted healthcare services for over 25 years. Our hospital offers:</p>
        <p>100+ Expert Doctors - Specialists in multiple departments.</p>
        <p>50,000+ Patients Served - Providing care to thousands every year.</p>
        <p>24/7 Emergency Services - Always ready for urgent care.</p>
        <p>Advanced Medical Equipment - State-of-the-art technology for accurate diagnosis.</p>
        <p>Accredited & Award-Winning - Recognized for excellence in patient care.</p>
        <p>Multiple Departments - Cardiology, Neurology, Orthopedics, Pediatrics, and more.</p>
        <p>Patient-Centered Approach - Focused on comfort, safety, and personalized care.</p>
      
          <p><b>Our Goals</b></p>
          <p>
           At CuraHealth, our goal is to provide exceptional patient care by ensuring every individual receives personalized, 
           compassionate, and high-quality medical attention. We focus on promoting preventive health through regular check-ups, 
           screenings, and guidance on maintaining a healthy lifestyle. By utilizing advanced medical technology and innovative treatments, 
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
