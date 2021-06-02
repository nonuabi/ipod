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
      prevState: -1,
      index: -1,
    };
  }

  rotateWheel = () => {
    let angle = 0;
    var target = document.getElementById("circle_id");
    const region = new ZingTouch.Region(target);
    region.bind(target, "rotate", (e) => {
      angle = angle + e.detail.distanceFromLast;
      switch (this.state.currentState) {
        case 1:
          if (angle < 0) {
            let controlFlow = document.getElementById("0");
            controlFlow.style.backgroundColor = "#2B81A3";
            controlFlow.style.color = "white";
            this.setState({
              index: 0,
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
          if (angle > 0 && angle < 15) {
            let controlFlow = document.getElementById("0");
            controlFlow.style.backgroundColor = "white";
            controlFlow.style.color = "black";

            let music = document.getElementById("1");
            music.style.backgroundColor = "#2B81A3";
            music.style.color = "white";

            this.setState({
              index: 1,
            });

            let games = document.getElementById("2");
            games.style.color = "black";
            games.style.backgroundColor = "white";

            let settings = document.getElementById("3");
            settings.style.color = "black";
            settings.style.backgroundColor = "white";
          }
          if (angle > 15 && angle < 30) {
            let controlFlow = document.getElementById("0");
            controlFlow.style.backgroundColor = "white";
            controlFlow.style.color = "black";

            let music = document.getElementById("1");
            music.style.backgroundColor = "white";
            music.style.color = "black";

            let games = document.getElementById("2");
            games.style.color = "white";
            games.style.backgroundColor = "#2B81A3";

            this.setState({
              index: 2,
            });

            let settings = document.getElementById("3");
            settings.style.color = "black";
            settings.style.backgroundColor = "white";
          }
          if (angle > 30 && angle < 45) {
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
            settings.style.backgroundColor = "#2B81A3";

            this.setState({
              index: 3,
            });
          }
          break;
        //   break;
        // case 2:
        //   break;
        // case 3:
        //   // if (angle < 0) {
        //   //   let allMusic = document.getElementById("0");
        //   //   allMusic.style.backgroundColor = "#2B81A3";
        //   //   allMusic.style.color = "white";
        //   //   this.setState({
        //   //     index: 0,
        //   //   });

        //   //   let artices = document.getElementById("1");
        //   //   artices.style.backgroundColor = "white";
        //   //   artices.style.color = "black";

        //   //   let album = document.getElementById("2");
        //   //   album.style.color = "black";
        //   //   album.style.backgroundColor = "white";
        //   // }
        //   // if (angle > 0 && angle < 15) {
        //   //   let allMusic = document.getElementById("0");
        //   //   allMusic.style.backgroundColor = "white";
        //   //   allMusic.style.color = "black";

        //   //   let artices = document.getElementById("1");
        //   //   artices.style.backgroundColor = "#2B81A3";
        //   //   artices.style.color = "white";

        //   //   this.setState({
        //   //     index: 1,
        //   //   });

        //   //   let album = document.getElementById("2");
        //   //   album.style.color = "black";
        //   //   album.style.backgroundColor = "white";
        //   // }
        //   // if (angle > 15 && angle < 30) {
        //   //   let allMusic = document.getElementById("0");
        //   //   allMusic.style.backgroundColor = "white";
        //   //   allMusic.style.color = "black";

        //   //   let artices = document.getElementById("1");
        //   //   artices.style.backgroundColor = "white";
        //   //   artices.style.color = "black";

        //   //   let album = document.getElementById("2");
        //   //   album.style.color = "white";
        //   //   album.style.backgroundColor = "#2B81A3";

        //   //   this.setState({
        //   //     index: 2,
        //   //   });
        //   }
        //   break;
        // case 4:
        //   break;
        // case 5:
        //   break;
        default:
          break;
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
    // let prevState = this.state.currentState;
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
