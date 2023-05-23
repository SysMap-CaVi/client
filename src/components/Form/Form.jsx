// REACT
import { useState } from "react";
// ÍCONES
import yellowPino from "../../assets/icons/yellow-pino.svg";
import whiteArrow from "../../assets/icons/white-arrow.svg";
// CSS
import "./Style.css";

// API NOMINATIM - para encontrar latitude e longitude dos endereços digitados
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
// Parâmetros da URL para
const params = {
  address: "",
  key: process.env.REACT_APP_API_KEY,
};

export default function Form(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isListVisible, setIsListVisible] = useState(true);

  // Função para clicar no item da lista selecionar o item e desaparecer a lista
  const handleItemClick = (item) => {
    setSelectPosition(item);
    setIsListVisible(false);
  };

  // Função para realizar fetch na API
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsListVisible(true);

    const searchParams = {
      ...params,
      address: searchText,
    };

    const queryString = new URLSearchParams(searchParams).toString();

    try {
      const response = await fetch(`${GOOGLE_API_URL}${queryString}`);
      console.log("test 200 " + process.env.REACT_APP_API_KEY)
      const data = await response.json();
      setListPlace(data.results);
    } catch {
      (error) => console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSearch}>
          <img src={yellowPino} alt="yellow-pin" />
          <input
            type="text"
            value={searchText}
            placeholder="Digite seu endereço aqui"
            onChange={({ target }) => {
              setSearchText(target.value);
            }}
          />
          <button type="submit">
            <img src={whiteArrow} alt="Seta" />
          </button>
        </form>
      </div>
      <div className="list-container">
        {isListVisible && (
          <ul>
            {listPlace.map((item) => {
              return (
                <li key={item?.place_id}>
                  <div
                    className="list-item"
                    onClick={() => {
                      handleItemClick(item);
                      console.log("teste 0", item);
                    }}
                  >
                    <p>{item?.formatted_address}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
