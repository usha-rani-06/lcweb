import React from 'react';

const Careers = () => {
  const positions = [
    { title: 'Senior AI Engineer', type: 'Full-time', location: 'Remote' },
    { title: 'Data Scientist', type: 'Full-time', location: 'Tech City' },
    { title: 'Business Development Manager', type: 'Full-time', location: 'Remote' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Join Our Team</h1>
          <p>Be part of the future of AI consulting</p>
        </div>
        
        <div className="grid">
          {positions.map((position, index) => (
            <div key={index} className="card">
              <h3>{position.title}</h3>
              <div className="job-meta">
                <span className="type">{position.type}</span>
                <span className="location">{position.location}</span>
              </div>
              <button className="btn mt-4">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;