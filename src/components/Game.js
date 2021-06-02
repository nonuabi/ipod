import React, { Component } from "react";
import { GiPegasus } from "react-icons/gi";
class Game extends Component {
  render() {
    return (
      <div className="game pending">
        <GiPegasus size="3em" color="black" />
        <h2>Games</h2>
      </div>
    );
  }
}

export default Game;
