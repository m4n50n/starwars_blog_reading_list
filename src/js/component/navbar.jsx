import React from "react";

import Logo from "../../img/main-logo.png";

export const Navbar = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <img className="img-fluid" src={Logo} alt="Starwars Logo" />
    </header>
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
