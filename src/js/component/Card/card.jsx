import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// Components
import { ActionButtons } from "../ActionButtons/action-buttons.jsx";

// Styles
import "./card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [ZoomedImage, setZoomedImage] = useState(false);

  const ImageURL = `https://starwars-visualguide.com/assets/img/characters/${store.characters[props.id].uid}.jpg`;

  // Remove "zoomed" class when clicks outside the image
  const ImageContainer = useRef(null);
  const handleClickOutside = (event) => {
    if (ImageContainer.current && !ImageContainer.current.contains(event.target)) {
      setZoomedImage(false);
    }
  };

  useEffect(() => document.addEventListener("mouseup", handleClickOutside), []);

  return (
    <div className="card col-12 col-md-3 flex-row flex-md-column p-0">
      <div
        className="img-container"
        ref={ImageContainer}
        style={{
          backgroundImage: `url(${ImageURL})`,
        }}
      >
        <img
          src={ImageURL}
          className={`card-img-top ${ZoomedImage ? "zoomed" : ""}`}
        />
      </div>

      <i
        className="zoom fas fa-lg fa-search-plus"
        onClick={(e) => setZoomedImage(!ZoomedImage)}
      ></i>

      <div className="card-body">
        <h5 className="card-title m-0 pe-1">
          <Link to={`/info/${store.characters[props.id].uid}`} className="text-white text-decoration-none">
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
