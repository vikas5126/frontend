import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import "../styles/_footer.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";


const Footer = () => {
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = () => {
    if (reviewText.trim()) {
      alert("Review submitted!");
      setReviewText(""); // Clear the textarea
      // In a real application, you would handle the review data here
    } else {
      alert("Please enter your review before submitting.");
    }
  };
  return (
    <>
    <div className="footer-utility">
        <div className="utility-item">
          <RiCustomerService2Line />
          <p>Customer Support</p>
        </div>
        <div className="utility-item">
          <RiSecurePaymentLine />
          <p>Secure Shopping</p>
        </div>
        <div className="utility-item">
          <RiSecurePaymentLine />
          <p>Swift Shipping</p>
        </div>
        <div className="utility-item">
          <RiSecurePaymentLine />
          <p>Money Return</p>
        </div>
      </div>
      <footer className="site-footer">
      <div className="footer-container">

        {/* Brand and Socials */}
        <section className="footer-brand">
          <h2>Prabhashree Bhog</h2>
          <p>
            Carefully selected dry fruits from India and across the world.
            <a href="/about"> Learn more →</a>
          </p>
          <div className="social-icons">
            <i className="ri-twitter-fill"></i>
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
          </div>
        </section>

        {/* Navigation Links */}
        {/* <nav className="footer-nav">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/about"}><li>About Us</li></Link>
              <Link to={"/contact"}><li>Contact Us</li></Link> */}
              {/* <Link to={"/contact"}><li>Bulk Ordering</li></Link> */}
              {/* <Link to={"/search"}><li>Shopping</li></Link>
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul> */}
              {/* <li>My Account</li> */}
              {/* <Link to={"/privacy"}><li>Privacy Policy</li></Link> */}
              {/* <Link to={"/return"}><li>Return Policy</li></Link> */}
              {/* <Link to={"/term"}><li>Terms & Conditions</li></Link>
            </ul>
          </div>
        </nav> */}

        {/* Contact Info */}
       <section className="footer-contact">
  <h4>Contact</h4>

  {/* Address link to Google Maps */}
  <a 
    href="https://maps.app.goo.gl/Rbw6xCcDRKE9JV3r5" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <p><i className="ri-home-9-fill" /> Trinagar, Delhi-110035</p>
  </a>

  {/* Email link to Gmail */}
  <a 
    href="mailto:rahul251202@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <p><i className="ri-mail-fill" /> rahul251202@gmail.com</p>
  </a>

  {/* Phone link to WhatsApp */}
  <a 
    href="https://wa.me/919835477119" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <p><i className="ri-phone-fill" /> +91-9835477119</p>
  </a>
</section>


        {/* Review Box */}
      <section className="footer-review">
  <h4>Leave a Review</h4>
  <textarea
    placeholder="Share your thoughts..."
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
  ></textarea>
  <button onClick={handleReviewSubmit}>Submit</button>
</section>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} PrabhashreeBhog. All rights reserved.
        <p>Designed by Rahul Jha</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
