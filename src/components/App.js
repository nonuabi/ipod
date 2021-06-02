import React from "react";
import Menu from "./Menu";
import Display from "./Display";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeItems: ["Control Flow", "Music", "Game", "Settings"],
      musicItems: ["All Music", "Artices", "Album"],
      settingItems: ["Themes", "Wheel Color"],
      currentState: 1,
    };
  }

  render() {
    const { homeItems, currentState, musicItems, settingItems } =
      this.state;
    return (
      <div className="App">
        <div className="container">
          <Display
            homeItems={homeItems}
            currentState={currentState}
            musicItems={musicItems}
            settingItems={settingItems}
            
          />
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
