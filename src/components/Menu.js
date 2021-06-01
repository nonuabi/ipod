import React, { Component } from "react";
import { FaFastForward, FaFastBackward, FaPause } from "react-icons/fa";
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="circle">
          <div className="center_btn"></div>
          <div className="menu_btn">
            <button>MENU</button>
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
