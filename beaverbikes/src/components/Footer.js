import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-element">
          <h4>Address</h4>
          <p>2835 Lake Shore Blvd W UNIT B</p>
          <p>Etobicoke, ON M8V 3V8</p>
        </div>
        <div className="footer-element">
          <h4>Phone</h4>
          <p>(647) 338-2453</p>
          <h4>Email</h4>
          <p>beaverbikes@google.com</p>
        </div>
        <div className="footer-element">
          <h4>Hours</h4>
          <p>Monday: Closed</p>
          <p>Tuesday-Friday: 9:30am-9pm</p>
          <p>Saturday: 10am-8pm</p>
          <p>Sunday: 10am-6pm</p>
        </div>
        <div className="footer-social">
          <Link
            className="facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </Link>
          <Link
            className="facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-instagram fa-2x" />
          </Link>
          <Link
            className="facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
