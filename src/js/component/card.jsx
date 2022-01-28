import React from "react";

import "./card.css";

export const Card = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/350x150"
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          repudiandae!
        </p>

        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-outline-primary shadow-none">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning shadow-none">
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
          </a>
        </div>
      </div>
    </div>
  );
};
