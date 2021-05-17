//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import { Home } from "./component/home.js";

//render your react application

let color = "green";

function changeLight() {
	if (color == "green") color = "yellow";
	else if (color == "yellow") color = "red";
	else if (color == "red") color = "green";
	ReactDOM.render(<Home active={color} />, document.querySelector("#app"));
}

setInterval(changeLight, 3000);
