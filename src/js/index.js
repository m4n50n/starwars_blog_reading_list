// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include styles into the bundle
import "../styles/index.css";

// import components
import Layout from "./layout";

// render react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
