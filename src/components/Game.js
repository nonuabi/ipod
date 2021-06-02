import React, { Component } from "react";
// import react-icons
import { GiPegasus } from "react-icons/gi";
class Game extends Component {
  render() {
    return (
      <div className="game pending">
        {/* using react icon with custom size and color */}
        <GiPegasus size="3em" color="black" />
        <h2>Games</h2>
      </div>
    );
  }
}
//exporting
export default Game;
