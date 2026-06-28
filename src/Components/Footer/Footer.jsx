import "./Footer.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import playStore from "../../assets/Footer/play-store.png";
import appleStore from "../../assets/Footer/apple-store.png";
import qrCode from "../../assets/Footer/qr-code.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Disclaimer */}

        <div className="disclaimer">
          <h4>Disclaimer</h4>

          <p>
            IBS will NEVER ask you to reveal your User ID, Password, OTP or PIN.
            Never share your banking credentials through phone, email, SMS or
            social media platforms.
          </p>
        </div>

        {/* Main Footer */}

        <div className="footer-grid">
          <div>
            <h3>Products</h3>

            <ul>
              <li>Savings Account</li>
              <li>Current Account</li>
              <li>Fixed Deposit</li>
              <li>Credit Card</li>
              <li>Home Loan</li>
              <li>Personal Loan</li>
              <li>Auto Loan</li>
              <li>Education Loan</li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>

            <ul>
              <li>Internet Banking</li>
              <li>Mobile Banking</li>
              <li>Bill Payments</li>
              <li>Fund Transfer</li>
              <li>ATM Services</li>
              <li>UPI Payments</li>
              <li>Insurance Services</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>

            <ul>
              <li>Contact Us</li>
              <li>Locate Branch</li>
              <li>Customer Care</li>
              <li>Raise Complaint</li>
              <li>Grievance Redressal</li>
              <li>FAQs</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="footer-right">
            <h3>Connect</h3>

            <div className="social-icons">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaXTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>

            <h4>Download IBS Mobile App</h4>

            <div className="store-buttons">
              <img src={playStore} alt="Play Store" />
              <img src={appleStore} alt="Apple Store" />
            </div>

            <h4>Customer Care</h4>

            <p>1800-123-4567</p>
            <p>1800-987-6543</p>

            <img src={qrCode} alt="QR Code" className="qr-image" />
          </div>
        </div>

        {/* Footer Links */}

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Careers</a>
          <a href="#">Blogs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Security Tips</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Media Centre</a>
          <a href="#">IFSC Code</a>
          <a href="#">Regulatory Policies</a>
        </div>

        {/* Bottom CTA */}

        <div className="bottom-banner">
          <p>Make your financial dreams come true with IBS Digital Banking.</p>

          <button>Request Callback</button>
        </div>

        {/* Copyright */}

        <div className="copyright">© 2026 IBS - Developed By Samarth Pawar</div>
      </div>
    </footer>
  );
}

export default Footer;
