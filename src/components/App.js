import React from "react";
import Menu from "./Menu";
import Display from "./Display";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Menu />
      </div>
    );
  }
}

export default App;
