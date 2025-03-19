import React from "react";
import "./ContactForm.css";

// Contact Information Component
const ContactInformation = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>We design and develop modern, responsive websites tailored to your needs.</p>
      <ul>
        <li>📞 +91 8239898724</li>
        <li>📧 sorabhjangir333@gmail.com</li>
        <li>📍 Jaipur, Rajasthan</li>
      </ul>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Get In Touch</h2>
      <p>We design and develop modern, responsive websites tailored to your needs, ensuring top-notch performance and user experience.</p>
      <form>
        <div className="form-grid">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Ram" />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="hello@ram.com" />
          </div>
        </div>
        <div>
          <label htmlFor="subject">Your Subject</label>
          <input type="text" id="subject" placeholder="I want to hire you quickly" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write here your message" rows="4"></textarea>
        </div>
        <button type="submit" className="ui-btn">
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

// Main Component
const ContactSection = () => {
  return (
    <div className="contact-section">
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
