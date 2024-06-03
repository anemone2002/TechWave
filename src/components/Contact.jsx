import React from 'react';
import './Contact.css';
// import backgroundImage from '../assets/images/contact.jpeg';

const Contact = () => {
  return (
    <div className="contact-container" >
      <div className="contact-content">
        <div className="contact-section">
          <h2>Contact Information</h2>
          <p>Email: info@techwave.com</p>
          <p>Phone: +996798555323</p>
          <p>Address: 123 , Chui, Bishkek, KG</p>
        </div>
        <div className="contact-section">
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 2pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
