import React, { Component } from "react";

class Home extends Component {
  render() {
    const { homeItems } = this.props;
    return (
      <div className="home display_default">
        <h2>iPod.js</h2>
        <ul>
          {homeItems.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
