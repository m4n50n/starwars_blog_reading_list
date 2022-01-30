import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "./card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card col-12 col-md-3 p-0 flex-row flex-md-column">
      <div
        className="img-container"
        style={{
          backgroundImage: `url("https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg")`,
        }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
          className="card-img-top"
        />
      </div>

      <i
        className="zoom fas fa-lg fa-search-plus"
        onClick={(e) =>
          e.target.parentNode.firstChild.firstChild.classList.add("zoomed")
        }
      ></i>

      <div className="card-body d-flex justify-content-between align-items-center px-2 py-1">
        <h5 className="card-title m-0 pe-1">
          <Link to={`/info/${props.uid}`} className="text-white text-decoration-none">
            {props.name}
          </Link>
        </h5>

        <div className="d-flex align-items-center gap-2">
          <a
            href="#"
            className={`btn btn-sm btn-outline-warning btn-green shadow-none ${
              store.bookmarks.indexOf(props.id) !== -1 ? "bookmark" : ""
            }`}
            onClick={() => actions.SaveCharacter(props.id, "bookmarks")}
          >
            {store.bookmarks.indexOf(props.id) !== -1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-bookmark-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            )}
          </a>

          <a
            href="#"
            className={`btn btn-sm btn-outline-warning shadow-none ${
              store.likes.indexOf(props.id) !== -1 ? "like" : ""
            }`}
            onClick={() => actions.SaveCharacter(props.id, "likes")}
          >
            {store.likes.indexOf(props.id) !== -1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  uid: PropTypes.string,
  name: PropTypes.string,
};
