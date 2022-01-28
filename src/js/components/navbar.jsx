import React from "react";

import "./navbar.css";
import Logo from "../../img/app/main-logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top justify-content-between align-items-center px-3 px-md-5">
        <ul className="navbar-nav flex-row align-items-center gap-3">
          <li className="nav-item">
            <a
              className="nav-link btn btn-sm btn-secondary text-white p-1 shadow-none"
              href="#"
            >
              Favourites <span>3</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link btn btn-sm btn-secondary text-white p-1 shadow-none"
              href="#"
            >
              Pending <span>6</span>
            </a>
          </li>
        </ul>

        <h1 className="m-0 text-white text-decoration-line-through">SWAPI.TECH T35T</h1>

        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-search text-white me-3"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <input
            type="search"
            className="form-control form-control-sm shadow-none"
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

/* export const aNavbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark py-4">
      <div className="container-fluid justify-content-end">
        <a className="navbar-brand py-2" href="#">
          <img src={Logo} alt="Star Wars Logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle btn btn-secondary text-white px-2 shadow-none"
                href="#"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
              >
                Favorites <span className="rounded-3 p-1 mx-2 bg-dark">99</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler border-secondary shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </header>
  );
}; */
