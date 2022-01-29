import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

// Import Components
import { Card } from "../components/card.jsx";
import { Spinner } from "../components/spinner.jsx";

// Import Styles
import "../../styles/home.css";

// Import Functions
import { ApiGetCharacters } from "../service/api-requests";

export const Home = () => {
  const { store, actions } = useContext(Context); // This return the store and actions objects

  useEffect(() => GetCharacters(), []);

  const GetCharacters = () => {
    store.loading = true;

    ApiGetCharacters()
      .then((response) => response.json())
      .then((data) => actions.InsertCharacters(data))
      .catch((error) => console.error("Error!!!: ", error))
      .finally((store.loading = false));
  };

  window.addEventListener("mouseup", () => {
    // "Remove zoomed image"
    document.querySelector(".zoomed")
      ? document.querySelector(".zoomed").classList.remove("zoomed")
      : null;
  });

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
        {store.characters.map((CharacterInfo) => (
          <Card
            key={CharacterInfo.uid}
            id={CharacterInfo.uid}
            name={CharacterInfo.name}
          />
        ))}
      </div>

      {store.loading ? <Spinner /> : null}
    </main>
  );
};
