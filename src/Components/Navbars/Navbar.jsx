import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBell, FaQuestionCircle, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("PERSONAL");

  return (
    <>
      {/* Top Header */}
      <header className="top-header">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* Top Menu */}
        <div className="top-menu">
          <span
            className={`menu-tab ${active === "PERSONAL" ? "active" : ""}`}
            onClick={() => setActive("PERSONAL")}
          >
            PERSONAL
          </span>

          <span className="divider"></span>

          <span
            className={`menu-tab ${active === "CORPORATE" ? "active" : ""}`}
            onClick={() => setActive("CORPORATE")}
          >
            CORPORATE
          </span>

          <span className="divider"></span>

          <span
            className={`menu-tab ${active === "DIGITAL" ? "active" : ""}`}
            onClick={() => setActive("DIGITAL")}
          >
            DIGITAL
          </span>

          <span className="divider"></span>

          <span
            className={`menu-tab ${active === "BUSINESS" ? "active" : ""}`}
            onClick={() => setActive("BUSINESS")}
          >
            BUSINESS
          </span>

          <span className="divider"></span>

          <span
            className={`menu-tab ${active === "AGRI & MICRO" ? "active" : ""}`}
            onClick={() => setActive("AGRI & MICRO")}
          >
            AGRI & MICRO
          </span>

          <span className="menu-tab complaint-tab">
            <FaQuestionCircle />
            Lodge a Complaint
          </span>

          <span className="menu-tab bell-tab">
            <FaBell />
          </span>

          <button className="login-btn">
            Login <FaChevronDown />
          </button>
        </div>
      </header>

      {/* Bottom Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-tab">Accounts</li>
          <li className="nav-tab">Loans</li>
          <li className="nav-tab">Cards</li>
          <li className="nav-tab">Payments</li>
          <li className="nav-tab">Invest & Insure</li>
          <li className="nav-tab">NRI</li>
          <li className="nav-tab">Rewards & Offers</li>
          <li className="nav-tab">More</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
