import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="circle">
          <div className="center_btn"></div>
          <div className="menu_btn"></div>
          <div className="next_btn"></div>
          <div className="prev_btn">
            <img></img>
          </div>
          <div className="pause_btn"></div>
        </div>
      </div>
    );
  }
}

export default Menu;
