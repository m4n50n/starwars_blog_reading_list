import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import Logo from "../../img/app/main-logo.png";
import { CounterButton } from "../components/counter-button.jsx";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex-column flex-md-row fixed-top justify-content-between align-items-center px-1 px-md-4 gap-2">
        <div className="d-flex gap-2 order-3 order-md-1">
          <CounterButton type="likes" />
          <CounterButton type="bookmarks" />
        </div>

        <h1 className="my-0 order-1 order-md-2">
          <Link to="/" className="text-white text-decoration-none">
            SWAPI.TECH T35T
          </Link>
        </h1>

        <div className="input-group w-auto order-2 order-md-3">
          <span className="input-group-text px-2 bg-white border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            type="search"
            className="form-control form-control-sm shadow-none search-input"
            placeholder="Search something ..."
          />
        </div>
      </nav>

      <header className="d-flex justify-content-center py-3">
        <Link to="/">
          <img className="img-fluid" src={Logo} alt="Starwars Logo" />
        </Link>
      </header>
    </>
  );
};
