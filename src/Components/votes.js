import React, { Component } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// import spinner from "./spinner";

export default class Vote extends Component {
  state = {
    loading: true,
    dogo: [],
    imageurl:"",
    dogobreeds: null,
  };

  async componentDidMount() {
    const url =
      "https://api.thedogapi.com/v1/images/search?order=Rand";
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      dogo: parsedData,
      loading: false,
      imageurl:parsedData[0].url
    });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.dogo ? (<div>{/* for spinner */}</div>) : 
        
        (
            <div className="container">
            
            <div className="container d-flex justify-content-evenly my-3">
            <button className="btn-green"><FaThumbsUp /> Like</button>
            <button className="btn-red"><FaThumbsDown /> DisLike</button>
            </div>

            <div className="card votescard">
            <img src={this.state.imageurl} alt="" className="card-img" />
            </div>

            </div>

        )}
      </div>
    );
  }
}
