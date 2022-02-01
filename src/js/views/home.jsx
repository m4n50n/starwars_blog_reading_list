import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

// Components
import { Card } from "../component/Card/card.jsx";
import { Spinner } from "../component/Spinner/spinner.jsx";

// Styles
import "../../styles/home.css";

// Functions
import { ApiGetCharacters } from "../service/api-requests";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [Loading, setLoading] = useState(true);

  const GetCharacters = async () => {
    try {
      setLoading(true);
      const response = await ApiGetCharacters();
      const data = await response.json();
      actions.InsertCharacters(data);
    }
    catch(error) {
      console.error("ApiGetCharacters() -> Error!!!: ", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => GetCharacters(), []);

  // Hide zoomed image
  window.addEventListener("mouseup", () =>
    document.querySelector(".zoomed")
      ? document.querySelector(".zoomed").classList.remove("zoomed")
      : null
  );

  return (
    <main className="container-fluid container-lg">
      <div className="row my-5">
        <div className="col-12">
          <h1 className="section-title">
            <span>Characters</span>
          </h1>
        </div>
      </div>

      <div className="row justify-content-center gap-2 mx-2 mx-md-0 mb-5 cards-row overflow-auto">
        {
          Loading ? <Spinner />
            :
            store.characters.map((CharacterInfo, CharactersArrayIndex) => (
              <Card
                key={CharactersArrayIndex}
                id={CharactersArrayIndex}
                uid={CharacterInfo.uid}
                name={CharacterInfo.name}
              />
            ))
        }
      </div>
    </main>
  )
}

export default Home;
