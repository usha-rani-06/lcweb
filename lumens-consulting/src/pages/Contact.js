import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Contact Us</h1>
          <p>Ready to transform your business? Let's talk.</p>
        </div>
        
        <div className="grid">
          <div className="card">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          <div className="card">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> hello@lumensconsulting.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Innovation St<br/>Tech City, TC 12345</p>
            <div className="contact-methods">
              <div>📧 Email</div>
              <div>📞 Phone</div>
              <div>💬 Live Chat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;