import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// Import Components
import { Card } from "../components/card.jsx";
import { Spinner } from "../components/spinner.jsx";

// Import Styles
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context); // This return the store and actions objects
  useEffect(() => actions.GetCharacters(), []);

  return (
    <main className="container">
      <div className="row my-4">
        <div className="col-12">
          <h1>
            <span>Characters</span>
          </h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 d-flex gap-4 pb-3 overflow-auto">
          {
            store.characters.map((CharacterInfo) => <Card key={CharacterInfo.uid} id={CharacterInfo.uid} name={CharacterInfo.name} />)
          }
        </div>
      </div>

      { store.loading ? <Spinner /> : null}
    </main>
  );
};
