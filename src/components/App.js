import React from "react";
import Menu from "./Menu";
import Display from "./Display";
import ZingTouch from "zingtouch";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeItems: ["Control Flow", "Music", "Game", "Settings"],
      musicItems: ["All Music", "Artices", "Album"],
      settingItems: ["Themes", "Wheel Color"],
      currentState: 1,
      prevMenu: -1,
    };
  }

  rotateWheel = () => {
    let angle = 0;
    var target = document.getElementById("circle_id");
    const region = new ZingTouch.Region(target);
    region.bind(target, "rotate", (e) => {
      angle = angle + e.detail.distanceFromLast;
      if (angle <= 0 && this.state.currentState === 1) {
        let controlFlow = document.getElementById("0");
        controlFlow.style.backgroundColor = "black";
        controlFlow.style.color = "white";
        this.setState({
          prevMenu: 0,
        });

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        let games = document.getElementById("2");
        games.style.color = "black";
        games.style.backgroundColor = "white";

        let settings = document.getElementById("3");
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
      }
      if (angle > 0 && angle < 15 && this.state.currentState === 1) {
        let controlFlow = document.getElementById("0");
        controlFlow.style.backgroundColor = "white";
        controlFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "black";
        music.style.color = "white";

        this.setState({
          prevMenu: 1,
        });

        let games = document.getElementById("2");
        games.style.color = "black";
        games.style.backgroundColor = "white";

        let settings = document.getElementById("3");
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
      }
      if (angle > 15 && angle < 30 && this.state.currentState === 1) {
        let controlFlow = document.getElementById("0");
        controlFlow.style.backgroundColor = "white";
        controlFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        let games = document.getElementById("2");
        games.style.color = "white";
        games.style.backgroundColor = "black";

        this.setState({
          prevMenu: 2,
        });

        let settings = document.getElementById("3");
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
      }
      if (angle > 30 && angle < 45 && this.state.currentState === 1) {
        let controlFlow = document.getElementById("0");
        controlFlow.style.backgroundColor = "white";
        controlFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        let games = document.getElementById("2");
        games.style.color = "black";
        games.style.backgroundColor = "white";

        let settings = document.getElementById("3");
        settings.style.color = "white";
        settings.style.backgroundColor = "black";

        this.setState({
          prevMenu: 3,
        });
      }
    });
  };

  itemSelete = () => {
    const { prevMenu } = this.state;

    switch (prevMenu) {
      case 0:
        this.setState({
          currentState: 2,
        });

        break;
      case 1:
        this.setState({
          currentState: 3,
        });
        break;
      case 2:
        this.setState({
          currentState: 4,
        });

        break;
      case 3:
        this.setState({
          currentState: 5,
        });

        break;
      default:
        this.setState({
          currentState: 1,
        });
        break;
    }
    console.log("peveMenu   ", prevMenu);
    console.log("currentState   ", this.state.currentState);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
  }
  render() {
    const { homeItems, currentState, musicItems, settingItems } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Display
            homeItems={homeItems}
            currentState={currentState}
            musicItems={musicItems}
            settingItems={settingItems}
          />
          <Menu rotateWheel={this.rotateWheel} itemSelete={this.itemSelete} />
        </div>
      </div>
    );
  }
}

export default App;
