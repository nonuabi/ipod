import React, { Component } from "react";
// import Theme from "./Theme";
class Setting extends Component {
  render() {
    const { settingItems } = this.props;
    return (
      <div className="setting display_default">
        {/* <Theme /> */}
        <h2>Settings</h2>
        <ul>
          {settingItems.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Setting;
