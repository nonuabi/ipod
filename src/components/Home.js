import React, { Component } from "react";
//home component
class Home extends Component {
  render() {
    //destructuring
    const { homeItems } = this.props;
    return (
      <div className="home display_default">
        <h2>iPod.js</h2>
        {/* iterating over the homeItems array and displaying the elements */}
        <ul>
          {homeItems.map((element, index) => {
            return (
              <li id={index} key={index}>
                {element}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
// exporting
export default Home;
