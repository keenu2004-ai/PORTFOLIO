import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Open mailto link prefilled with form content for transparent email client delivery
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:contact.vaibhavrajput@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">09 / Direct Inquiry</span>
          <h2 id="contact-heading" className="section-title">
            Let's Build Something Production-Grade
          </h2>
          <p className="section-subtitle">
            Open for full-stack &amp; software engineering roles, web applications, and hardware/IoT integrations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Direct Info */}
          <div className="contact-info-card">
            <h3 className="info-title">Reach Out Directly</h3>
            <p className="info-desc">
              Have a project in mind, need a full-stack engineer for your team, or want to discuss HRMS &amp; IoT solutions? Connect directly via GitHub or LinkedIn.
            </p>

            <div className="contact-methods">
              <a
                href="https://github.com/x-vaibhav"
                target="_blank"
                rel="noopener noreferrer"
                className="method-item"
                aria-label="Visit GitHub Profile"
              >
                <div className="method-icon purple">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <span className="method-label">GitHub Repository</span>
                  <span className="method-val">github.com/x-vaibhav</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/x-vaibhav"
                target="_blank"
                rel="noopener noreferrer"
                className="method-item"
                aria-label="Visit LinkedIn Profile"
              >
                <div className="method-icon green">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="method-label">LinkedIn Profile</span>
                  <span className="method-val">linkedin.com/in/x-vaibhav</span>
                </div>
              </a>
            </div>

            <div className="availability-card">
              <div className="avail-badge">
                <span className="status-pulse"></span>
                <span>Current Status</span>
              </div>
              <p className="avail-text">
                Available for full-time software engineering roles &amp; technical projects.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Send a Direct Message</h3>

            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Message Prepared in Email Client</h4>
                <p>Your default email app has been opened with your prefilled message!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary btn-sm"
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full-Stack Engineer Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message Details</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your project, engineering role, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                  {isSubmitting ? (
                    'Opening Email Client...'
                  ) : (
                    <>
                      <Send size={18} /> Open Direct Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
