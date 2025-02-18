import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
 <h2 className="contact-title">
        Connect With Us
        <span className="underline"></span>
      </h2>
   
    <div className="contact-container">
     
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Phone</label>
        <input type="text" placeholder="Your Phone Number" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
