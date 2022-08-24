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
        <div className="contact-form">
          <p>Name</p>
          <input type="text" placeholder="Your name" />
          <p>Your email*</p>
          <input type="text" placeholder="Your email address" />
          <p>Message*</p>
          <textarea type="text" placeholder="Enter your message" />
          <Button>Submit</Button>
        </div>
        <img src="/images/cloud-dark.png" alt="loud-dark" />
      </div>

      <div className="footer-bottom">
        <div>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-behance"></i>
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
