import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'The Future of AI in Business', date: 'Jan 15, 2024', excerpt: 'How AI is reshaping industries...' },
    { title: '5 AI Trends to Watch in 2024', date: 'Jan 10, 2024', excerpt: 'Key developments that will...' },
    { title: 'Machine Learning Best Practices', date: 'Jan 5, 2024', excerpt: 'Proven strategies for...' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Blog & Insights</h1>
          <p>Stay ahead with our latest thought leadership</p>
        </div>
        
        <div className="grid">
          {posts.map((post, index) => (
            <div key={index} className="card">
              <h3>{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p>{post.excerpt}</p>
              <button className="btn btn-secondary mt-4">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;