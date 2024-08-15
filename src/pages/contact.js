import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, query } = formData;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@wrenchmate.in&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(query)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      {/* <div> */}
      <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Connect with us to get your queries resolved</p>
          <div className="info-item">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            +91 7386565050
          </div>
          <div className="info-item">
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            Contact@wrenchmate.in
          </div>
          <div className="info-item">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            Hyderabad, India.
          </div>
          <div>
          <img src="./tracktires.png" alt="Phone" className="tire" />

          </div>
         
        </div>
      {/* </div>
      <div> */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="query"
              placeholder="Your Query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      {/* </div> */}
    </div>
  );
}
