import React, { Component } from "react";
//setting component
class Setting extends Component {
  render() {
    //destructuring
    const { settingItems } = this.props;
    return (
      <div className="setting display_default">
        <h2>Settings</h2>
        {/* iterating over the setting items array to along with that displaying the element */}
        <ul>
          {settingItems.map((element, index) => {
            return (
              // added id and key as the array index
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
//exporting
export default Setting;
