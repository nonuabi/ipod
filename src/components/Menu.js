import React, { Component } from "react";

// imorting the different icons from the react-icons lib
import { FaFastForward, FaFastBackward, FaPause } from "react-icons/fa";

// import css
import "../css/Menu.css";
class Menu extends Component {
  render() {
    //destructruing
    const { rotateWheel, forwardMove, backwardMove } = this.props;
    return (
      <div className="menu">
        {/* on clicking the circle div the rotatewheel function is called */}
        <div className="circle" id="circle_id" onClick={rotateWheel}>
          {/* con clicking thhe center btn div forwardMonve function is called */}
          <div className="center_btn" onClick={forwardMove}></div>

          {/* on clicking the menu button backwardMove function is called */}
          <div className="menu_btn">
            <button onClick={backwardMove}>MENU</button>
          </div>

          {/* added the forward icon and button in the wheel */}
          <div className="next_btn">
            <button>
              <FaFastForward size="20px" />
            </button>
          </div>

          {/* added the prev icon and button in the wheel */}
          <div className="prev_btn">
            <button>
              <FaFastBackward size="20px" />
            </button>
          </div>

          {/* added the pause icon and button in the wheel */}
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

// exporting
export default Menu;
