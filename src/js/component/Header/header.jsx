import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import { CounterButton } from "../CounterButton/counter-button.jsx";

// Styles
import "./header.css";
import Logo from "../../../img/app/main-logo.png";
import { SearchIcon } from "../Icons/icons.jsx";

export const Header = () => {
  const [SearchValue, setSearchValue] = useState("");

  const GetSearchResults = () => {
    return <ul className={`search-results rounded-bottom`}>
      <li>Search result N1</li>
      <li>Search result N2</li>
    </ul>;
  }

  // Hide search results
  window.addEventListener("mouseup", () => document.querySelector(".search-results").style.display = "none");

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
            <span className="input-group-text ps-2 pe-0 bg-white border-0">
              <SearchIcon />
            </span>

            <input
              type="search"
              className="search-input form-control form-control-sm shadow-none"
              placeholder="Search here ..."
              onChange={(e) => {
                const NewValue = e.target.value.trim();
                document.querySelector(".search-results").style.display = NewValue.length !== 0 ? "block" : "none";
                setSearchValue(NewValue);
              }}
            />
          </div>

          {GetSearchResults()}
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
