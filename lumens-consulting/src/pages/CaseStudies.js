import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Retail AI Optimization',
      client: 'Major Retail Chain',
      result: '35% increase in sales conversion',
      image: '📦'
    },
    {
      title: 'Healthcare Predictive Analytics',
      client: 'Regional Hospital Network',
      result: '28% reduction in readmission rates',
      image: '🏥'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'Global Manufacturer',
      result: '22% improvement in production efficiency',
      image: '🏭'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Case Studies</h1>
          <p>Real results from real clients</p>
        </div>
        
        <div className="grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <div className="case-study-image">{study.image}</div>
              <h3>{study.title}</h3>
              <p className="client">Client: {study.client}</p>
              <p className="result">Result: {study.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;