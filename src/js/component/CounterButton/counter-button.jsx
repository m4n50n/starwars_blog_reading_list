import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./counter-button.css";
import { BookmarkFillIcon, HeartFillIcon } from "../Icons/icons.jsx";

const GetButtonElements = (type) => {
  const { store, actions } = useContext(Context);

  return (
    <ul className="counter-menu dropdown-menu p-0">
      {store[[type]].length === 0 ? (
        <li>
          <a className="dropdown-item text-muted disabled" href="#">
            Nothing here
          </a>
        </li>
      ) : (
        store[[type]].map((CharacterInfo, CharactersArrayIndex) => {
          return (
            <li key={CharactersArrayIndex}>
              <a className="dropdown-item" href="#">
                {store.characters[CharacterInfo].name}

                <i
                  className="remove-dropdown-element fas fa-times"
                  onClick={() => actions.SaveCharacter(CharacterInfo, type)}
                ></i>
              </a>
            </li>
          )
        })
      )}
    </ul>
  )
}

export const CounterButton = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="counter-button btn btn-sm btn-secondary dropdown-toggle gap-2 shadow-none"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
      >
        {props.type === "likes" ? <HeartFillIcon /> : props.type === "bookmarks" ? <BookmarkFillIcon /> : null} <span className="total-number">{store[[props.type]].length}</span>
      </button>

      {GetButtonElements(props.type)}
    </div>
  )
}

CounterButton.propTypes = {
  type: PropTypes.string,
}
