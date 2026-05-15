import React from 'react';

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>About Lumens Consulting</h1>
          <p>Our story, mission, and values</p>
        </div>
        
        <div className="grid">
          <div>
            <h2>Our Mission</h2>
            <p>
              To illuminate the path to business success through innovative AI solutions 
              and strategic consulting. We believe every organization has untapped potential 
              that can be unlocked through intelligent technology and human insight.
            </p>
          </div>
          <div>
            <h2>Our Story</h2>
            <p>
              Founded in 2020 by AI experts and business strategists, Lumens Consulting 
              has grown from a small team of innovators to a trusted partner for 
              Fortune 500 companies and startups alike.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <h2>Our Values</h2>
          <div className="grid">
            <div className="card">
              <h3>Innovation</h3>
              <p>Always pushing the boundaries of what's possible</p>
            </div>
            <div className="card">
              <h3>Integrity</h3>
              <p>Delivering honest, transparent solutions</p>
            </div>
            <div className="card">
              <h3>Excellence</h3>
              <p>Striving for perfection in every project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;