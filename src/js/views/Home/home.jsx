import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Components
import { Card } from "../../component/Card/card.jsx";
import { Spinner } from "../../component/Spinner/spinner.jsx";

// Styles
import "./home.css";

// Functions
import { ApiGetCharacters } from "../../service/api-requests";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [Loading, setLoading] = useState(true);

  const GetCharacters = async () => {
    try {
      setLoading(true);
      const response = await ApiGetCharacters();
      const data = await response.json();
      console.log(data);
      actions.InsertCharacters(data);
    }
    catch (error) {
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
      <div className="row my-4">
        <div className="col-12">
          <h1 className="section-title">
            <span>Characters</span>
          </h1>
        </div>
      </div>

      <div className="cards-row-pagination">
        <button 
          type="button" 
          className={`btn btn-dark shadow-sm ${!store.characters.previous ? "invisible" : ""}`}
          onClick={() => console.log("test")}
        >
          <i className="fas fa-angle-left me-2"></i> Previous
        </button>

        <button 
          type="button" 
          className="btn btn-dark shadow-sm"
          onClick={() => console.log("test")}
        >
          Next <i className="fas fa-angle-right ms-2"></i>
        </button>
      </div>

      <div className="cards-row row justify-content-center gap-2 mx-0 mb-5">
        {
          Loading ? <Spinner />
            :
            store.characters.results.map((CharacterInfo, CharactersArrayIndex) => (
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
