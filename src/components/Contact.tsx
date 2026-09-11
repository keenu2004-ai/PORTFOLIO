import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError('Message could not be sent. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">09 / Direct Inquiry</span>
          <h2 id="contact-heading" className="section-title">
            REACH OUT
          </h2>
          <p className="section-subtitle">
            Open for full-stack &amp; software engineering roles, web applications, and hardware/IoT integrations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Direct Info */}
          <div className="contact-info-card">
            <h3 className="info-title">Connect directly through GitHub or send a message below.</h3>
            <p className="info-desc">
              Have a project in mind, building a product, or looking for a full-stack engineer?
              <br/><br/>
              I work across frontend, backend, databases, deployment, and connected hardware systems.
              <br/><br/>
              Use the form to send me a direct message. Keep it concise.
            </p>

            <div className="contact-methods">
              <a
                href="https://github.com/keenu2004-ai"
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
                  <span className="method-val">github.com/keenu2004-ai</span>
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
                <h4>Sent ✓</h4>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary btn-sm"
                  type="button"
                  style={{marginTop: '1rem'}}
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

                {submitError && <p className="form-error" style={{color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '1rem'}}>{submitError}</p>}

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} /> Send
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
