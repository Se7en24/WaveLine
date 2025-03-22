import React, { useState } from "react";
import "./Contact.css"; // Create a CSS file for styles

const Contact = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseMessage("Thank you for your feedback!");
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p><strong>Email:</strong> support@WebWaves.com</p>
          <p><strong>Phone:</strong> +91 7813820188 </p>
          <p><strong>Address:</strong> 123 Ocean Drive, Shipping City</p>
        </div>
        <h3>Feedback Form</h3>
        <form id="feedback-form" onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
        {responseMessage && <p id="responseMessage">{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
