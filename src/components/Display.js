import React, { Component } from "react";
import Home from "./Home";
class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display_contant">
          <Home />
        </div>
      </div>
    );
  }
}

export default Display;
