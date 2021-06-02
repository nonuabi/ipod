import React from "react";
// import ipod lower menu which contain the wheel
import Menu from "./Menu";
// import ipod display
import Display from "./Display";
// import zingTouch the detect the gesture
import ZingTouch from "zingtouch";
// import the css file for app
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    // seting the state
    this.state = {
      homeItems: ["Cover Flow", "Music", "Game", "Settings"],
      musicItems: ["All Music", "Artices", "Album"],
      settingItems: ["Themes", "Time&Date"],
      currentState: 1,
      prevState: -1,
      index: -1,
    };
  }
  // componentdidmount is used to highlight the first list element
  componentDidMount() {
    let inital = document.getElementById("0");
    inital.style.backgroundColor = "#2B81A3";
    inital.style.color = "white";
  }
  // this function tracks over the angle and make changes in the display
  rotateWheel = () => {
    let angle = 0;
    // getting the wheel div
    var target = document.getElementById("circle_id");
    const region = new ZingTouch.Region(target);
    region.bind(target, "rotate", (e) => {
      // find the angle
      angle = angle + e.detail.distanceFromLast;
      // if angle is less then 0 then it cover the zeroth index of array
      if (angle < 0) {
        let coverFlow = document.getElementById("0");
        //change the backgoundColor and the text color of selected list item
        coverFlow.style.backgroundColor = "#2B81A3";
        coverFlow.style.color = "white";
        //setting the state to 0, because if angle is less then 0 then we are on the index 0 of the array
        this.setState({
          index: 0,
        });

        //setting the first index list item back to white and black combo
        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";

        // if current state is 1 and 3 then we are change the index
        if (this.state.currentState === 1 || this.state.currentState === 3) {
          //setting the second index list item back to white and black combo
          let games = document.getElementById("2");
          games.style.color = "black";
          games.style.backgroundColor = "white";
        }
        // if current state is 1, then we are change the index

        if (this.state.currentState === 1) {
          //setting the third index list item back to white and black combo
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      //if angle is greater than 0 and less than 15 we change the background and text color or first index
      if (angle > 0 && angle < 15) {
        //change the backgoundColor and the text color back
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";
        //setting the first index list item
        let music = document.getElementById("1");
        music.style.backgroundColor = "#2B81A3";
        music.style.color = "white";
        //setting the state to 1, because if angle is greater then 0 and less then 15, then we are on the index 1 of the array
        this.setState({
          index: 1,
        });
        // if current state is 1 and 3 then we are change the index
        if (this.state.currentState === 1 || this.state.currentState === 3) {
          //setting the second index list item back to white and black combo
          let games = document.getElementById("2");
          games.style.color = "black";
          games.style.backgroundColor = "white";
        }
        // if current state is 1, then we are change the index
        if (this.state.currentState === 1) {
          //setting the third index list item back to white and black combo
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      //if angle is greater than 15 and less than 30 we change the background and text color or second index
      //and we change only when current state is 1 and 3 because all other states are still pending
      if (
        angle > 15 &&
        angle < 30 &&
        (this.state.currentState === 1 || this.state.currentState === 3)
      ) {
        //change the backgoundColor and the text color back
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";
        //change the backgoundColor and the text color back
        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";
        //change the backgoundColor and the text color back
        let games = document.getElementById("2");
        games.style.color = "white";
        games.style.backgroundColor = "#2B81A3";
        //setting the state to 2, because if angle is greater then 15 and less then 30, then we are on the index 2 of the array
        this.setState({
          index: 2,
        });
        //change the backgoundColor and the text color back
        if (this.state.currentState === 1) {
          let settings = document.getElementById("3");
          settings.style.color = "black";
          settings.style.backgroundColor = "white";
        }
      }
      //if angle is greater than 30 and less than 45 we change the background and text color or second index
      //and we change only when current state is 1  because all other states are still pending
      if (angle > 30 && angle < 45 && this.state.currentState === 1) {
        let coverFlow = document.getElementById("0");
        coverFlow.style.backgroundColor = "white";
        coverFlow.style.color = "black";
        //change the backgoundColor and the text color back
        let music = document.getElementById("1");
        music.style.backgroundColor = "white";
        music.style.color = "black";
        //change the backgoundColor and the text color back
        let games = document.getElementById("2");
        games.style.color = "black";
        games.style.backgroundColor = "white";
        //change the backgoundColor and the text color back
        let settings = document.getElementById("3");
        settings.style.color = "white";
        settings.style.backgroundColor = "#2B81A3";
        //setting the state to 3, because if angle is greater then 30 and less then 45, then we are on the index 3 of the array
        this.setState({
          index: 3,
        });
      }
    });
  };

  // this function changes display components forward
  forwardMove = () => {
    const { index } = this.state;
    switch (index) {
      // for case 0 -> Cover Flow Component is visible
      case 0:
        this.setState({
          index: -1,
          currentState: 2,
          prevState: 1,
        });
        break;

      // for case 1 -> Music Component is visible
      case 1:
        this.setState({
          index: -1,
          currentState: 3,
          prevState: 1,
        });
        break;
      // for case 2 -> Game Component is visible
      case 2:
        this.setState({
          index: -1,
          currentState: 4,
          prevState: 1,
        });
        break;
      // for case 3 -> Setting Component is visible
      case 3:
        this.setState({
          index: -1,
          currentState: 5,
          prevState: 1,
        });
        break;
      // for default -> Home Component is visible
      default:
        this.setState({
          currentState: 1,
        });
        break;
    }
  };
  // this function changes display components forward
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

  //rendering 
  render() {
    //destructuring
    const { homeItems, currentState, musicItems, settingItems } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Display
          //sengin props to display component
            homeItems={homeItems}
            currentState={currentState}
            musicItems={musicItems}
            settingItems={settingItems}
          />
          <Menu
          //sending props to menu component
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
