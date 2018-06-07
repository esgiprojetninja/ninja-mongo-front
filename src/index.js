import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
