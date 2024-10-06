import React from "react";
import "../style/Footer.css";
import { Icon } from "@iconify/react";
function Footer() {
  return (
    <>
      <footer className="footer pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h2 style={{fontWeight:"bold"}}>Apikus</h2>
              <p>
                Protect PII and ensure compliance for small and SMBs and
                startups with our comprehensive SaaS solution
              </p>
              
            </div>
            <div className="col-lg-3 col-md-6" id="services">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>Network Security</li>
                <li>Data Encryption</li>
                <li>Server Protection</li>
                <li>Vulnerability Assessment</li>
                <li>Cloud Security</li>
                <li>Antivirus</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6" id="quicklinks">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Terms &amp; Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Connect With Us</h5>
              <ul className="list-unstyled">
                <li>
                <Icon icon="mdi:address-marker" /> Choti Daulatpur, Durga Sthan,
                  Jamalpur, Munger, Bihar
                </li>
                <li>
                <Icon icon="ph:phone-fill" /> +91 99725 11203
                </li>
                <li>
                <Icon icon="material-symbols:mail" /> <a href="mailto:info@apikuslabs.com" style={{textDecoration:"none", color:"#fff"}}>info@apikuslabs.com</a>
                </li>
              </ul>
              <h5>Subscribe Us</h5>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>© 2024 apikuslabs. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
