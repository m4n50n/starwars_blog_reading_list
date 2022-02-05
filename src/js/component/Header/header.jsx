import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import { CounterButton } from "../CounterButton/counter-button.jsx";

// Styles
import "./header.css";
import Logo from "../../../img/app/main-logo.png";
import { SearchIcon } from "../Icons/icons.jsx";

// Functions
import { apiSearchCharacters } from "../../service/api-requests";

export const Header = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [ActiveSearch, setActiveSearch] = useState(false);
  const [SearchResults, setSearchResults] = useState([]);

  // Hide search results when clicks outside of them
  const Results = useRef(null);
  const handleClickOutside = (event) => {
    if (Results.current && !Results.current.contains(event.target)) {
      setActiveSearch(false);
    }
  };

  useEffect(() => document.addEventListener("mouseup", handleClickOutside), []);

  const getSearchResults = async () => {
    try {
      setActiveSearch(true);
      const response = await apiSearchCharacters(SearchValue);
      const data = await response.json();
      setSearchResults(data.result);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <header>
      <nav className="top-bar navbar flex-column flex-md-row fixed-top px-1 px-md-4 gap-2">
        <div className="d-flex order-3 order-md-1 gap-2">
          <CounterButton type="likes" />
          <CounterButton type="bookmarks" />
        </div>

        <h1 className="order-1 order-md-2 my-0">
          <Link to="/" className="text-white text-decoration-none">
            API-TEST SITE
          </Link>
        </h1>

        <div className="order-2 order-md-3">
          <div className="input-group">
            <span className={`input-group-text ps-2 pe-0 bg-white border-0 ${ActiveSearch ? "active-search" : ""}`}>
              <SearchIcon />
            </span>

            <input
              type="search"
              className="search-input form-control form-control-sm shadow-none"
              placeholder="Search and enter ↲"
              onChange={(e) => setSearchValue(e.target.value.trim().toLowerCase())}
              onKeyDown={(e) => {
                if (e.key === "Enter" && SearchValue.length !== 0) {
                  getSearchResults();
                }
              }}
            />
          </div>

          <ul className={`search-results rounded-bottom ${ActiveSearch ? "d-block" : "d-none"}`} ref={Results}>
            {
              ActiveSearch && SearchResults.length === 0
                ? <li>Nothing found</li>
                : Object.values(SearchResults).map((Result, ResultIndex) =>
                  <Link key={ResultIndex} to={`/info/${Result.uid}`} className="text-decoration-none">
                    <li>
                      {Result.properties.name}
                    </li>
                  </Link>
                )
            }
          </ul>
        </div>
      </nav>

      <div className="py-3 text-center">
        <Link to="/">
          <img className="img-logo img-fluid" src={Logo} alt="Starwars Logo" />
        </Link>
      </div>
    </header>
  )
}
