import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import "../styles/_footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
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
          <h2>Dry Fruit House</h2>
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
        <nav className="footer-nav">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/about"}><li>About Us</li></Link>
              <Link to={"/contact"}><li>Contact Us</li></Link>
              {/* <Link to={"/contact"}><li>Bulk Ordering</li></Link> */}
              <Link to={"/search"}><li>Shopping</li></Link>
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              {/* <li>My Account</li> */}
              <Link to={"/privacy"}><li>Privacy Policy</li></Link>
              <Link to={"/return"}><li>Return Policy</li></Link>
              <Link to={"/term"}><li>Terms & Conditions</li></Link>
            </ul>
          </div>
        </nav>

        {/* Contact Info */}
        <section className="footer-contact">
          <h4>Contact</h4>
          <p><i className="ri-home-9-fill" /> Trinagar, Delhi-110035</p>
          <p><i className="ri-mail-fill" /> rahul251202@gmail.com</p>
          <p><i className="ri-phone-fill" /> +91-9835477119</p>
        </section>

        {/* Review Box */}
        <section className="footer-review">
          <h4>Leave a Review</h4>
          <textarea placeholder="Share your thoughts..." />
          <button>Submit</button>
        </section>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2023 Prabhashree. All rights reserved.</p>
        <p>Designed by Rahul Jha</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
