import React, { Component } from "react";
import "./App.css";
import Breeds from "./Components/breeds";
import Vote from "./Components/votes";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

class App extends Component {
  state = { whichComponentToShow: "Breed" };

  render() {

    if (this.state.whichComponentToShow === "Breed") {
      return (
        <div className="App">
          <div className="container" style={{ backgroundColor: "black" }}>
            
            <button className="btn"
              onClick={() => {this.setState({ whichComponentToShow: "Votes" });}}>VOTES</button>

            <button className="btn">BREEDS</button>
          
          </div>

          <div id="test1" class="col s12">
            {<Breeds />}
          </div>
        </div>
      );
    }

    else if (this.state.whichComponentToShow === "Votes") {
      return (
        <div className="App">
          <div className="container" style={{ backgroundColor: "black" }}>
            <button className="btn">VOTES</button>

            <button
              className="btn"
              onClick={() => {
                this.setState({ whichComponentToShow: "Breed" });
              }}
            >
              BREEDS
            </button>
          </div>
          <br />
          <div className="container" style={{}}>
            <button className="btn-green">
              <FaThumbsUp /> Like
            </button>
            <button className="btn-red">
              <FaThumbsDown /> DisLike
            </button>
          </div>
          <br />
          <Vote />
        </div>
      );
    } 


    return null;
  }
}

export default App;
