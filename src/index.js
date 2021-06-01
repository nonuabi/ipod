import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Favicon from "react-favicon";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <Favicon url="https://cdn.freelogovectors.net/wp-content/uploads/2020/11/apple_music_logo.png" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
