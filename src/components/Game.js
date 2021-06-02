import React, { Component } from "react";
import { GiPegasus } from "react-icons/gi";
class Game extends Component {
  render() {
    return (
      <div className="game pending">
        {/* <img src="https://images.unsplash.com/photo-1617096199297-06d372cba8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWUlMjBpY29uc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img> */}

        <GiPegasus size="3em" color="black" />
        <h2>Games</h2>
      </div>
    );
  }
}

export default Game;
