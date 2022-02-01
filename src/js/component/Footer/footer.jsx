import React from "react";

// Styles
import "./footer.css";
import { GitHubIcon } from "../Icons/icons.jsx";

export const Footer = () => (
  <footer className="py-1 text-center">
    <a
      className="text-decoration-none text-white"
      href="https://github.com/m4n50n"
      target="_blank"
    >
      <GitHubIcon />

      <small>Jose Clemente García Rodríguez | 2022. 4Geeks Academy</small>
    </a>
  </footer>
);
