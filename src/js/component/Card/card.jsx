import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// Components
import { ActionButtons } from "../ActionButtons/action-buttons.jsx";

// Styles
import "./card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const ImageURL = `https://starwars-visualguide.com/assets/img/characters/${store.characters[props.id].uid}.jpg`;

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
          <Link to={`/info/${props.id}`} className="text-white text-decoration-none">
            {store.characters[props.id].name}
          </Link>
        </h5>

        <div className="d-flex align-items-center gap-2">
          <ActionButtons id={props.id} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number
}
