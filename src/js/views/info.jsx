import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Components
import { Spinner } from "../component/Spinner/spinner.jsx";

// Styles
import "../../styles/info.css";

// Functions
import { ApiGetCharacterInfo } from "../service/api-requests";

const Info = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const CharacterUID = params.uid;

  useEffect(() => GetCharacterInfo(), []);

  const GetCharacterInfo = () => {
    ApiGetCharacterInfo(CharacterUID)
      .then((response) => response.json())
      .then((data) => actions.InsertCharacterInfo(data))
      .catch((error) =>
        console.error("ApiGetCharacterInfo() -> Error!!!: ", error)
      )
      .finally();
  };

  return typeof store.characters_info[CharacterUID] === "undefined" ? ( // The component is rendered the first time before the request ends
    <></>
  ) : (
    <main className="container">
      <div className="row my-5">
        <div className="col-12">
          <h1 className="section-title">
            <span>{store.characters_info[CharacterUID].properties.name}</span>
          </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-11 d-flex flex-column flex-md-row justify-content-center align-items-center mb-5 rounded-3 p-3 bg-white shadow-sm">
          <div className="col-12 col-md-4 text-center">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${store.characters_info[CharacterUID].uid}.jpg`}
              className="description-image rounded-3 shadow-lg"
            />
          </div>
          <div className="col-12 col-md-8 py-4 px-2 p-md-2">
            {console.log(store.characters_info[CharacterUID])}
            <h5 className="description-title d-flex align-items-center gap-3">
              <i className="fab fa-2x fa-galactic-senate"></i>

              {store.characters_info[CharacterUID].description}
            </h5>

            <hr />

            <ul className="list-group list-group-flush description-details">
              <li className="list-group-item">
                <span>Homeworld:</span>
                {store.characters_info[CharacterUID].properties.homeworld}
              </li>
              <li className="list-group-item">
                <span>Gender:</span>
                {store.characters_info[CharacterUID].properties.gender}
              </li>
              <li className="list-group-item">
                <span>Birth Year:</span>
                {store.characters_info[CharacterUID].properties.birth_year}
              </li>
              <li className="list-group-item">
                <span>Height:</span>
                {store.characters_info[CharacterUID].properties.height}
              </li>
              <li className="list-group-item">
                <span>Mass:</span>
                {store.characters_info[CharacterUID].properties.mass}
              </li>
              <li className="list-group-item">
                <span>Hair Color:</span>
                {store.characters_info[CharacterUID].properties.hair_color}
              </li>
              <li className="list-group-item">
                <span>Skin Color:</span>
                {store.characters_info[CharacterUID].properties.skin_color}
              </li>
              <li className="list-group-item">
                <span>Eye Color:</span>
                {store.characters_info[CharacterUID].properties.eye_color}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Spinner />
    </main>
  )
}

export default Info;
