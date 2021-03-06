import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

// Components
import { Spinner } from "../../component/Spinner/spinner.jsx";

// Styles
import "./info.css";

// Functions
import { apiGetCharacterInfo } from "../../service/api-requests";

const Info = () => {
  const { store, actions } = useContext(Context);
  const [Loading, setLoading] = useState(true);

  const params = useParams();
  const CharacterUID = params.uid;

  const getCharacterInfo = async () => {
    try {
      if (store.characters_info[CharacterUID]) { return true; } // The character information has been loaded before

      setLoading(true);
      const response = await apiGetCharacterInfo(CharacterUID);
      const data = await response.json();
      actions.insertCharacterInfo(data);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => getCharacterInfo(), []);

  return Loading ? (<Spinner />)
    :
    (
      <main className="container">
        <div className="row my-5">
          <div className="col-12">
            <h1 className="section-title">
              <span>{store.characters_info[CharacterUID].properties.name}</span>
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-11 d-flex flex-column flex-md-row justify-content-center align-items-start mb-5 rounded-3 p-3 bg-white shadow-sm">
            <div className="col-12 col-md-4 text-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${store.characters_info[CharacterUID].uid}.jpg`}
                className="description-image rounded-0 rounded-top shadow-lg"
              />
            </div>
            <div className="col-12 col-md-8 py-4 px-2 p-md-2">
              <h5 className="description-title d-flex align-items-center gap-3">
                <i className="fab fa-2x fa-galactic-senate"></i>

                {store.characters_info[CharacterUID].description}
              </h5>

              <hr />

              <ul className="list-group list-group-flush description-details">
                {
                  Object.keys(store.characters_info[CharacterUID].properties).map((PropertyName, MapIndex) => {
                    return <li key={MapIndex} className="list-group-item">
                      <span>{PropertyName.replaceAll("_", " ")}:</span>
                      {store.characters_info[CharacterUID].properties[PropertyName]}
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Info;
