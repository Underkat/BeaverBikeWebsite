import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="../images/logo.png" />
          </Link>
          <ul className="nav-buttons">
            <li className="nav-button-item">
              <Link to="/" className="nav-button-item-link">
                Home
              </Link>
            </li>
            <li className="nav-button-item">
              <Link to="/" className="nav-button-item-link">
                Services
              </Link>
            </li>
            <li className="nav-button-item">
              <Link to="/" className="nav-button-item-link">
                About Us
              </Link>
            </li>
            <li className="nav-button-item">
              <Link to="/" className="nav-button-item-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
