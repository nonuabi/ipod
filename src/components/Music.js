import React, { Component } from "react";
// music component
class Music extends Component {
  render() {
    //destructuring
    const { musicItems } = this.props;
    return (
      <div className="music display_default">
        <h2>Music</h2>
        {/* iterating over the musicItems array and along with the displaying 
        all the element with the index id */}
        <ul>
          {musicItems.map((element, index) => {
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
// exporting
export default Music;
