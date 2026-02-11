import React from 'react';

const Home = () => {
  return (
    <div className="page-container home-page">
      <div className="home-content">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/ec/ABES_Engineering_College_logo.png" 
          alt="ABES Logo" 
          className="college-logo"
          onError={(e) => {e.target.style.display='none'}}
        />
        <h1>ABES Engineering College</h1>
        <p>Excellence in Education</p>
      </div>
    </div>
  );
};

export default Home;
