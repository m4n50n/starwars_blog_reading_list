import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "./counter-button.css";

const GetButtonBody = (type) => {
  const { store, actions } = useContext(Context); // This return the store and actions objects

  switch (type) {
    case "favourites":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>

          <span className="total-number">{store.favorites.length}</span>
        </>
      );
  }
};

export const CounterButton = (props) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="d-flex align-items-center gap-2 btn btn-sm btn-secondary dropdown-toggle shadow-none"
        data-bs-toggle="dropdown"
      >
        {GetButtonBody(props.type)}
      </button>

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
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

CounterButton.propTypes = {
  type: PropTypes.string,
};
