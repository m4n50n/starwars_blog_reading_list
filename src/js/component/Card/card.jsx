import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./card.css";
import { BookmarkIcon, BookmarkFillIcon, HeartIcon, HeartFillIcon } from "../Icons/icons.jsx";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const ImageURL = `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`;

  return (
    <div className="card col-12 col-md-3 flex-row flex-md-column p-0">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${ImageURL})`,
        }}
      >
        <img
          src={ImageURL}
          className="card-img-top"
        />
      </div>

      <i
        className="zoom fas fa-lg fa-search-plus"
        onClick={(e) =>
          e.target.parentNode.firstChild.firstChild.classList.add("zoomed")
        }
      ></i>

      <div className="card-body">
        <h5 className="card-title m-0 pe-1">
          <Link to={`/info/${props.uid}`} className="text-white text-decoration-none">
            {props.name}
          </Link>
        </h5>

        <div className="d-flex align-items-center gap-2">
          <a
            href="#"
            className={`btn btn-sm btn-outline-warning btn-green shadow-none ${store.bookmarks.indexOf(props.id) !== -1 ? "bookmark" : ""
              }`}
            onClick={() => actions.SaveCharacter(props.id, "bookmarks")}
          >
            {store.bookmarks.indexOf(props.id) !== -1 ? (
              <BookmarkFillIcon />
            ) : (
              <BookmarkIcon />
            )}
          </a>

          <a
            href="#"
            className={`btn btn-sm btn-outline-warning shadow-none ${store.likes.indexOf(props.id) !== -1 ? "like" : ""
              }`}
            onClick={() => actions.SaveCharacter(props.id, "likes")}
          >
            {store.likes.indexOf(props.id) !== -1 ? (
              <HeartFillIcon />
            ) : (
              <HeartIcon />
            )}
          </a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  uid: PropTypes.string,
  name: PropTypes.string,
}
