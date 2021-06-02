import React, { Component } from "react";
import Home from "./Home";
import Music from "./Music";
import Game from "./Game";
import Setting from "./Setting";
class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display_contant">
          {/* <Game /> */}
          <Home />
          {/* <Music /> */}
          {/* <Setting /> */}
        </div>
      </div>
    );
  }
}

export default Display;
