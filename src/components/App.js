import React from "react";
import Menu from "./Menu";
import Display from "./Display";
import ZingTouch from "zingtouch";
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeItems: ["Cover Flow", "Music", "Game", "Settings"],
      musicItems: ["All Music", "Artices", "Album"],
      settingItems: ["Themes", "Time&Date"],
      currentState: 1,
      prevState: -1,
      index: -1,
    };
  }
  componentDidMount() {
    let inital = document.getElementById("0");
    inital.style.backgroundColor = "#2B81A3";
    inital.style.color = "white";
  }

  rotateWheel = () => {
    let angle = 0;
    var target = document.getElementById("circle_id");
    const region = new ZingTouch.Region(target);
    region.bind(target, "rotate", (e) => {
      angle = angle + e.detail.distanceFromLast;
      console.log(angle);
      if (angle < 0) {
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "#2B81A3";
        coverFlow.style.color = "white";

        this.setState({
          index: 0,
        });

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        if (this.state.currentState === 1 || this.state.currentState === 3) {
          let games = document.getElementById("2");
          games.style.color = "black";
          games.style.backgroundColor = "white";
        }

        if (this.state.currentState === 1) {
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      if (angle > 0 && angle < 15) {
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "#2B81A3";
        music.style.color = "white";

        this.setState({
          index: 1,
        });

        if (this.state.currentState === 1 || this.state.currentState === 3) {
          let games = document.getElementById("2");
          games.style.color = "black";
          games.style.backgroundColor = "white";
        }

        if (this.state.currentState === 1) {
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      if (
        angle > 15 &&
        angle < 30 &&
        (this.state.currentState === 1 || this.state.currentState === 3)
      ) {
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        let games = document.getElementById("2");
        games.style.color = "white";
        games.style.backgroundColor = "#2B81A3";

        this.setState({
          index: 2,
        });

        if (this.state.currentState === 1) {
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      if (angle > 30 && angle < 45 && this.state.currentState === 1) {
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";

        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        let games = document.getElementById("2");
        games.style.color = "black";
        games.style.backgroundColor = "white";

        let settings = document.getElementById("3");
        settings.style.color = "white";
        settings.style.backgroundColor = "#2B81A3";

        this.setState({
          index: 3,
        });
      }
    });
  };

  forwardMove = () => {
    const { index } = this.state;
    console.log("BBpeveMenu   ", index);
    console.log("BBcurrentState   ", this.state.currentState);
    console.log("BBprevState   ", this.state.prevState);
    switch (index) {
      case 0:
        this.setState({
          index: -1,
          currentState: 2,
          prevState: 1,
        });
        break;
      case 1:
        this.setState({
          index: -1,
          currentState: 3,
          prevState: 1,
        });
        break;
      case 2:
        this.setState({
          index: -1,
          currentState: 4,
          prevState: 1,
        });
        break;
      case 3:
        this.setState({
          index: -1,
          currentState: 5,
          prevState: 1,
        });
        break;
      default:
        this.setState({
          currentState: 1,
        });
        break;
    }
    console.log("peveMenu   ", index);
    console.log("currentState   ", this.state.currentState);
    console.log("prevState   ", this.state.prevState);
  };
  backwardMove = () => {
    const { prevState } = this.state;
    if (this.state.currentState === 1) {
      return;
    } else {
      this.setState({
        currentState: prevState,
      });
    }
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
          <Menu
            rotateWheel={this.rotateWheel}
            forwardMove={this.forwardMove}
            backwardMove={this.backwardMove}
          />
        </div>
      </div>
    );
  }
}

export default App;
