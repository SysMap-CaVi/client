import instaIcon from "../../assets/icons/insta-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import "./Style.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <h3>Politica de privacidade | Copyright © 2023</h3>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/ameixagoiana/" target="blank">
          <img src={instaIcon} alt="Instagram Icon" />
        </a>
        <a href="https://www.linkedin.com/company/ameixagoiana/" target="blank">
          <img src={linkedinIcon} alt="Linkedin Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
