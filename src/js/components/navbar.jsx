import React from "react";

import "./navbar.css";
import Logo from "../../img/app/main-logo.png";
import { CounterButton } from "../components/counter-button.jsx";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex-column flex-md-row fixed-top justify-content-between align-items-center px-1 px-md-4 gap-2">
        <div className="d-flex gap-2 order-3 order-md-1">
          <CounterButton type="favourites" />
        </div>

        <h1 className="my-0 text-white order-1 order-md-2">
          SWAPI.TECH T35T
        </h1>

        <div className="d-flex align-items-center order-2 order-md-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search text-white me-2"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <input
            type="search"
            className="form-control form-control-sm shadow-none search-input"
            placeholder="Search something ..."
          />
        </div>
      </nav>

      <header className="d-flex justify-content-center py-3">
        <img className="img-fluid" src={Logo} alt="Starwars Logo" />
      </header>
    </>
  );
};