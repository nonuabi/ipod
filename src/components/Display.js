import React, { Component } from "react";
// imorting different components
import Home from "./Home";
import Music from "./Music";
import Game from "./Game";
import Setting from "./Setting";
import CoverFlow from "./CoverFlow";
// import css file
import "../css/Display.css";

class Display extends Component {
  render() {
    // destructuring
    const { currentState, homeItems, musicItems, settingItems } = this.props;

    return (
      <div className="display">
        <div className="display_contant">
          {/* checking if the current state first to find out which component to
          render */}
          {currentState === 1 && <Home homeItems={homeItems} />}
          {currentState === 2 && <CoverFlow />}
          {currentState === 3 && <Music musicItems={musicItems} />}
          {currentState === 4 && <Game />}
          {currentState === 5 && <Setting settingItems={settingItems} />}
        </div>
      </div>
    );
  }
}

export default Display;
