import "./Style.css";
import deskLogo from "../../assets/imgs/DESKTOP-LOGO.png";
import deskFrase from "../../assets/imgs/DESKTOP-FRASE.png";
import catarina from "../../assets/imgs/DESKTOP-CATARINA.png";
import instaIcon from "../../assets/icons/insta-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";

function Header({ getLocation }) {

  return (
    <header className="header-container">
      <div className="header-details">
        <img src={deskLogo} alt="logo" />
        <img src={deskFrase} alt="slogan" />
        <button onClick={getLocation}>My Location</button>
      </div>
      <div className="header-catarina">
        <img src={catarina} alt="catarina" />
      </div>
      <div className="header-icons">
        <a href="https://www.instagram.com/ameixagoiana/" target="blank">
          <img src={instaIcon} alt="Instagram Icon" />
        </a>
        <a href="https://www.linkedin.com/company/ameixagoiana/" target="blank">
          <img src={linkedinIcon} alt="Linkedin Icon" />
        </a>
      </div>
      <div className="header-corda" />
    </header>
  );
}

export default Header;
