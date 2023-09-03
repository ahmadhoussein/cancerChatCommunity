import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              CSL <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
            Connect with online healthcare experts to receive medical advice, online support, prescriptions, refills, and medical notes tailored to your needs. Access on-demand healthcare services right at your fingertips, fostering a supportive community for cancer patients.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">leukemia</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:CancerSocieteLebanese@proton.me">CancerSocieteLebanese@proton.me</a>
            </li>
            <li>
              <a href="mailto:cancersocietelebanese@gmail.com">
              cancersocietelebanese@gmail.com
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2022-2023 CSL+. All rights reserved.</p>

        <ul className="ft-social-links">
     

         
        </ul>
      </div>
    </div>
  );
}

export default Footer;
