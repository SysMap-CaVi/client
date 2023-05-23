import { useState } from "react";
import yellowPino from "../../assets/icons/yellow-pino.svg";
import whiteArrow from "../../assets/icons/white-arrow.svg";
import "./Style.css";
import { fetchPlaces } from "../../api/api";

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
    
    try {
      const places = await fetchPlaces(searchText);
      setListPlace(places);
    } catch {
      (error) => console.error("Error fetching data:", error);
      setListPlace([]);
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
