import { useState } from "react";
import yellowPino from "../../assets/icons/yellow-pino.svg"
import whiteArrow from "../../assets/icons/white-arrow.svg"
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

  const handleSearch = () => {
    const searchParams = {
      ...params,
      q: searchText,
    };
    const queryString = new URLSearchParams(searchParams).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

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
    <div className="form-container">
      <div className="form">
        <img src={yellowPino} alt="yellow-pin" />
        <input
          type="text"
          value={searchText}
          placeholder="Digite seu endereço aqui"
          onChange={(event) => {
          setSearchText(event.target.value);
          }}
        />
        <button onClick={handleSearch}>
          <img src={whiteArrow} alt="Seta" />
        </button>
      </div>
      <div className="list-container">
        <ul>
          {listPlace.map((item) => {
            return (
              <li key={item?.place_id}>
                <div
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="./placeholder.png"
                    alt="Placeholder"
                    style={{ width: 38, height: 38 }}
                  />
                  <p>{item?.display_name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
