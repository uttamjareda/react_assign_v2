import React, { Component } from "react";
import "./App.css";
import Breeds from "./Components/breeds";
import Vote from "./Components/votes";

class App extends Component {
  state = { whichComponentToShow: "Votes" };

  render() {

    if (this.state.whichComponentToShow === "Votes") {
      return (
        <div className="App">
          <div className="container d-flex justify-content-center my-3" style={{ backgroundColor: "black" }}>
            
            <button className="btn">VOTES</button>

            <button className="btn" onClick={() => {this.setState({ whichComponentToShow: "Breed" });}}>
              BREEDS
            </button>
          
          </div>
          <Vote/>
        </div>
      );
    }

    else if (this.state.whichComponentToShow === "Breed") {
      return (
        <div className="App">
          <div className="container d-flex justify-content-center my-3" style={{ backgroundColor: "black" }}>
            
            <button className="btn" onClick={() => {this.setState({ whichComponentToShow: "Votes" });}}>
              VOTES
            </button>

            <button className="btn">BREEDS</button>
          
          </div>

          <div id="test1" class="col s12">
            {<Breeds />}
          </div>
        </div>
      );
    }

     


    return null;
  }
}

export default App;
