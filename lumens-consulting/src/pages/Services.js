import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Strategy & Implementation',
      description: 'Comprehensive AI roadmaps, model development, and deployment.',
      icon: '🤖'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for prediction, classification, and optimization.',
      icon: '📈'
    },
    {
      title: 'Data Engineering',
      description: 'Scalable data pipelines, ETL processes, and data warehousing.',
      icon: '💾'
    },
    {
      title: 'Business Intelligence',
      description: 'Interactive dashboards and actionable insights.',
      icon: '📊'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital strategy and implementation.',
      icon: '🚀'
    },
    {
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and GCP migration and optimization.',
      icon: '☁️'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Our Services</h1>
          <p>Comprehensive solutions for your digital transformation journey</p>
        </div>
        
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/ai-solutions" className="btn btn-secondary mt-4">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;