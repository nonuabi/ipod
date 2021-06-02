import React, { Component } from "react";
import Home from "./Home";
import Music from "./Music";
import Game from "./Game";
import Setting from "./Setting";
import CoverFlow from "./CoverFlow";

class Display extends Component {
  render() {
    const { currentState, homeItems, musicItems, settingItems } = this.props;

    return (
      <div className="display">
        <div className="display_contant">
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
