import React from 'react';

const AISolutions = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>AI Solutions</h1>
          <p>Transform your business with cutting-edge artificial intelligence</p>
        </div>
        
        <div className="grid">
          <div className="card">
            <h3>Custom AI Models</h3>
            <p>Tailored machine learning solutions for your specific use cases and data.</p>
          </div>
          <div className="card">
            <h3>Computer Vision</h3>
            <p>Image recognition, object detection, and visual analytics solutions.</p>
          </div>
          <div className="card">
            <h3>Natural Language Processing</h3>
            <p>Chatbots, sentiment analysis, document processing, and more.</p>
          </div>
          <div className="card">
            <h3>Predictive Analytics</h3>
            <p>Forecasting, demand planning, and risk assessment models.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;