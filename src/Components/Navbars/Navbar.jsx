import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBell, FaQuestionCircle, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const [active, setActive] = useState("PERSONAL");

  const subMenus = {
    PERSONAL: [
      "Accounts",
      "Loans",
      "Cards",
      "Payments",
      "Invest & Insure",
      "NRI",
      "Rewards & Offers",
      "More",
    ],

    CORPORATE: [
      " Accounts ",
      " Cards",
      "Loans",
      "Cash Management",
      "Trade Finance",
      "Value Added",
      "Business Segments",
      "IBS Premium",
      "IBS First",
    ],

    DIGITAL: [
      "Internet Banking",
      "Mobile Banking",
      "UPI",
      "Digital Payments",
      "API Banking",
      "Security",
      "More",
    ],

    BUSINESS: [
      "Business Accounts",
      "Working Capital",
      "Business Loans",
      "POS Machine",
      "Merchant Services",
      "Collections",
      "More",
    ],

    "AGRI & MICRO": [
      "Agri Loans",
      "KCC",
      "Micro Finance",
      "Rural Banking",
      "Government Schemes",
      "Insurance",
      "More",
    ],
  };

  const handleMenuClick = (item) => {
    setActive(item);

    if (item === "CORPORATE") {
      navigate("/Corporate-Banking");
    } else if (item === "PERSONAL") {
      navigate("/");
    }
  };

  return (
    <>
      {/* ================= TOP HEADER ================= */}

      <header className="top-header">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="top-menu">
          {Object.keys(subMenus).map((item, index) => (
            <div key={item} className="menu-wrapper">
              <span
                className={`menu-tab ${active === item ? "active" : ""}`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </span>

              {index !== Object.keys(subMenus).length - 1 && (
                <span className="divider"></span>
              )}
            </div>
          ))}

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

      {/* ================= SECOND NAVBAR ================= */}

      <nav className="navbar">
        <ul className="nav-links">
          {subMenus[active].map((item, index) => (
            <li key={index} className="nav-tab">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
