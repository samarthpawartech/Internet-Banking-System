import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBell, FaQuestionCircle, FaChevronDown } from "react-icons/fa";

function Navbar() {
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
          <span className="menu-tab">PERSONAL</span>
          <span className="menu-tab">CORPORATE</span>
          <span className="menu-tab">DIGITAL</span>
          <span className="menu-tab">BUSINESS</span>
          <span className="menu-tab">AGRI & MICRO</span>

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
