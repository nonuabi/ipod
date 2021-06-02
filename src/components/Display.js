import React, { Component } from "react";
import Home from "./Home";
import Music from "./Music";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display_contant">
          <Home />
          {/* <Music /> */}
        </div>
      </div>
    );
  }
}

export default Display;
