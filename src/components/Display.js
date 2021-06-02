import React, { Component } from "react";
import Home from "./Home";
import Music from "./Music";
import Game from "./Game";
import Setting from "./Setting";
import ControlFlow from "./ControlFlow";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display_contant">
          {/* <Home /> */}
          {/* <ControlFlow /> */}
          {/* <Music /> */}
          {/* <Game /> */}
          <Setting />
        </div>
      </div>
    );
  }
}

export default Display;
