import "./Style.css";
import Form from "../Form/Form";
import Logo from "../../assets/imgs/Logo.png";

function Header() {
  return (
    <header className="header-container">
      <div className="header-details">
        <img src={Logo} alt="logo" size={30} />
        <h1>Localizador de lojas</h1>
      </div>
    </header>
  );
}

export default Header;
