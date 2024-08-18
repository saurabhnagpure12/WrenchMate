import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
     <div className="can-join-on">
      <div className="icon-container">
        <img src="google.png" alt="Google Play Icon" className="icon" />
        <img src="apple.png" alt="Apple App Store Icon" className="icon" />
        <img src="whatsapp.png" alt="WhatsApp Icon" className="icon" />
      </div>
      <div className="blue-border"></div>
    </div>
    <div className="footer-links"></div>
      <div className="footer-links">
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
        <a href="/service">Service</a>
        <a href="https://www.instagram.com/wrench_mate?igsh=bXZxcGFnNDhreW1u&utm_source=qr">Instagram</a>
      </div>
     
      <div className="footer-bottom">
        <p>&copy; 2024 Wrenchmate. All rights reserved.</p>
        <a href="/term">Terms of Service  .</a>
        <a href="/privacy">.  Privacy Policy</a>
      </div>
      <div className="can-join-on"></div>
    </footer>
  );
}
