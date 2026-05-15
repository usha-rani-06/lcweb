import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Illuminate Your Business Future</h1>
            <p className="hero-subtitle">
              Transform your organization with AI-powered consulting. 
              We deliver strategic insights and cutting-edge solutions 
              that drive measurable results.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn mr-2">Our Services</Link>
              <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Why Choose Lumens Consulting?</h2>
            <p>Proven expertise in AI transformation and business strategy</p>
          </div>
          
          <div className="grid">
            <div className="card text-center">
              <div className="stat">98%</div>
              <h3>Client Satisfaction</h3>
              <p>Our clients consistently rate us 5 stars for delivery and results</p>
            </div>
            <div className="card text-center">
              <div className="stat">50+</div>
              <h3>Successful Projects</h3>
              <p>Delivered transformative solutions across industries</p>
            </div>
            <div className="card text-center">
              <div className="stat">24/7</div>
              <h3>Support</h3>
              <p>Round-the-clock assistance for all our partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Core Services</h2>
          </div>
          <div className="grid">
            <div className="card">
              <h3>AI Solutions</h3>
              <p>Custom AI models, machine learning, and intelligent automation tailored to your business.</p>
              <Link to="/ai-solutions" className="btn btn-secondary mt-4">Learn More</Link>
            </div>
            <div className="card">
              <h3>Digital Strategy</h3>
              <p>Comprehensive digital transformation roadmaps and implementation.</p>
              <Link to="/services" className="btn btn-secondary mt-4">Learn More</Link>
            </div>
            <div className="card">
              <h3>Data Analytics</h3>
              <p>Advanced analytics and business intelligence solutions.</p>
              <Link to="/services" className="btn btn-secondary mt-4">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;