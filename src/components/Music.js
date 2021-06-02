import React, { Component } from "react";

class Music extends Component {
  render() {
    const { musicItems } = this.props;
    return (
      <div className="music display_default">
        <h2>Music</h2>
        <ul>
          {musicItems.map((element, index) => {
            return (
              <li id={index} key={index}>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Music;
