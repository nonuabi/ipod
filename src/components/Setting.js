import React, { Component } from "react";
import Theme from "./Theme";
class Setting extends Component {
  render() {
    return (
      <div className="setting display_default">
        {/* <Theme /> */}
        <h2>Settings</h2>
        <ul>
          <li>Themes</li>
          <li>Wheel Color</li>
        </ul>
      </div>
    );
  }
}

export default Setting;
