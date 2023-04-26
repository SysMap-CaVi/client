import "./Style.css";
import { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

function Form(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div className="form">
      <form action="submit">
        <input 
        placeholder="Digite o endereço/cep"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        />
        <button>Localizar</button>
      </form>
    </div>
  );
}

export default Form;
