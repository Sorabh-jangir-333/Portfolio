import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i1lg5c",     // Your service ID
        "template_wb9qxdm",    // Your template ID
        form.current,
        "vzqCbX1WQx5rChtjP"    // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for reaching out to me. I will get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section id="ContactSection" className="contact-section">
      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>We design and develop modern, responsive websites tailored to your needs.</p>
        <ul>
          <li>📞 +91 8239898724</li>
          <li>📧 sorabhjangir333@gmail.com</li>
          <li>📍 Jaipur, Rajasthan</li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <p>We design and develop modern, responsive websites tailored to your needs, ensuring top-notch performance and user experience.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-grid">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="user_name" id="name" placeholder="Ram" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="user_email" id="email" placeholder="hello@ram.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Your Subject</label>
            <input type="text" name="subject" id="subject" placeholder="I want to hire you quickly" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Write here your message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-btn">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;


