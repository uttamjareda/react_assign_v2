import React, { Component } from "react";

export default class Vote extends Component {
  state = {
    loading: true,
    dogo: null,
    dogobreeds: null,
  };

  async componentDidMount() {
    const url =
      "https://api.thedogapi.com/v1/images/search?api_key=e68c0c3f-806c-4077-acf2-d66e1f9c3ffd";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      dogo: data[0],
      loading: false,
      dogobreeds: data[0].breeds[0],
    });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.dogo ? (
          <div>loading...</div>
        ) : (
          <div>
            <img src={this.state.dogo.url} alt="error" margin="12px" height="500px"/>
            <div
              style={{
                fontSize: 38,
                fontFamily: "cursive",
                fontWeight: "bold",
              }}
            >
              {this.state.dogobreeds.name}
            </div>
          </div>
        )}
      </div>
    );
  }
}
