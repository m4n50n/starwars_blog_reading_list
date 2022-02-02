import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Components
import { Card } from "../../component/Card/card.jsx";
import { Spinner } from "../../component/Spinner/spinner.jsx";

// Functions
import { ApiGetCharacters } from "../../service/api-requests";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [Loading, setLoading] = useState(true);

  const GetCharacters = async (url = false) => {
    try {
      setLoading(true);
      const response = await ApiGetCharacters(url);
      const data = await response.json();
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

      <div className="cards-row row justify-content-center gap-2 mx-0">
        {
          Loading ? <Spinner />
            :
            store.characters.map((CharacterInfo, ArrayIndex) => (
              <Card
                key={ArrayIndex}
                id={ArrayIndex}
              />
            ))
        }
      </div>

      <div className="text-center my-4">
        <button
          type="button"
          className={`btn btn-dark shadow-sm ${!store.next_page ? "invisible" : ""}`}
          onClick={() => GetCharacters(store.next_page)}
        >
          Show More <i className="fas fa-long-arrow-alt-down ms-1"></i>
        </button>
      </div>
    </main>
  )
}

export default Home;
