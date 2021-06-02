import React, { Component } from "react";
import { FaFastForward, FaFastBackward, FaPause } from "react-icons/fa";
import "../css/Menu.css";
class Menu extends Component {
  render() {
    const { rotateWheel, forwardMove, backwardMove } = this.props;
    return (
      <div className="menu">
        <div className="circle" id="circle_id" onClick={rotateWheel}>
          <div className="center_btn" onClick={forwardMove}></div>
          <div className="menu_btn">
            <button onClick={backwardMove}>MENU</button>
          </div>
          <div className="next_btn">
            <button>
              <FaFastForward size="20px" />
            </button>
          </div>
          <div className="prev_btn">
            <button>
              <FaFastBackward size="20px" />
            </button>
          </div>
          <div className="pause_btn">
            <button>
              <FaPause size="20px" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
