import React from "react";
import "./Footer.css";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="contact-question">
          <h1>Let's work together</h1>
          <p>
            Seen something you like or got some comments or feedback? Let's
            talk.
          </p>
        </div>
        <form className="contact-form">
          <p>Name</p>
          <input type="text" placeholder="Your name" required />
          <p>Your email*</p>
          <input type="text" placeholder="Your email address" required />
          <p>Message*</p>
          <textarea type="text" placeholder="Enter your message" required />
          <Button>Submit</Button>
        </form>
        <img src="./images/cloud-dark.png" alt="loud-dark" required />
      </div>

      <div className="footer-bottom">
        <div>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-behance"></i>
        </div>
        <h1>Marcia Coco</h1>
        <a href="https://www.facebook.com/trunghips.0902/">
          Clone by TrungHips
        </a>
      </div>
    </div>
  );
};

export default Footer;
