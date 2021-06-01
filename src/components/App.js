import React from "react";
import Menu from "./Menu";
import Display from "./Display";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Display />
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
