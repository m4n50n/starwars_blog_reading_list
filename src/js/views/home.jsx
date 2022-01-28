import React from "react";
import { Card } from "../component/card.jsx";

// Import Styles
import "../../styles/home.css";

export const Home = () => {
  return (
    <main className="container">
      <div className="row my-4">
        <div className="col-12">
          <h1>
            <span>Characters</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex gap-4 pb-3 overflow-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <h1>
            <span>Planets</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex gap-4 pb-3 overflow-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};
