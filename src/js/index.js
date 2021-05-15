//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import { Home } from "./component/home.js";

//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));
