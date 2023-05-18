import { useState } from "react";
import yellowPino from "../../assets/icons/yellow-pino.svg";
import whiteArrow from "../../assets/icons/white-arrow.svg";
import "./Style.css";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function Form(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isListVisible, setIsListVisible] = useState(true);

  const handleItemClick = (item) => {
    setSelectPosition(item);
    setIsListVisible(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      ...params,
      q: searchText,
    };
    const queryString = new URLSearchParams(searchParams).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    setIsListVisible(true)

    console.log("teste1", props);

    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("teste 2", JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onClick={handleSearch}>
          <img src={yellowPino} alt="yellow-pin" />
          <input
            type="text"
            value={searchText}
            placeholder="Digite seu endereço aqui"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button type="submit">
            <img src={whiteArrow} alt="Seta"/>
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
                    <p>{item?.display_name}</p>
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
