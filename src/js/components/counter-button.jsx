import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "./counter-button.css";

const GetButtonBody = (type) => {
  const { store, actions } = useContext(Context); // This return the store and actions objects

  switch (type) {
    case "likes":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>

          <span className="total-number">{store.likes.length}</span>
        </>
      );
    case "bookmarks":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            className="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
          </svg>

          <span className="total-number">{store.bookmarks.length}</span>
        </>
      );
  }
};

const GetButtonDropDown = (type) => {
  const { store, actions } = useContext(Context); // This return the store and actions objects
  const StoreValue =
    type === "likes"
      ? store.likes
      : type === "bookmarks"
      ? store.bookmarks
      : null;

  return (
    <ul className="counter-menu dropdown-menu">
      {StoreValue.length === 0 ? (
        <li>
          <a className="dropdown-item text-muted disabled" href="#">
            Nothing here
          </a>
        </li>
      ) : (
        StoreValue.map((CharacterInfo, CharactersArrayIndex) => {
          return (
            <li key={CharactersArrayIndex}>
              <a className="dropdown-item" href="#">
                {store.characters[CharacterInfo].name}
              </a>
            </li>
          );
        })
      )}
    </ul>
  );
};

export const CounterButton = (props) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="counter-button d-flex align-items-center gap-2 btn btn-sm btn-secondary dropdown-toggle shadow-none"
        data-bs-toggle="dropdown"
      >
        {GetButtonBody(props.type)}
      </button>

      {GetButtonDropDown(props.type)}
    </div>
  );
};

CounterButton.propTypes = {
  type: PropTypes.string,
};
