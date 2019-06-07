import React, { Component } from "react";
import "./App.css";
import Beer from "./Beer";
import "./beer.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

class App extends Component {
  state = {
    beers: [],
    likedBeers: []
  };
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(beers => this.setState({ beers: beers }));
  }
  likeBeer = id => {
    const likedBeer = this.state.beers.find(beer => beer.id === id);
    console.log(likedBeer);
    const newBeers = [...this.state.likedBeers, likedBeer];
    console.log(newBeers);
    this.setState({ likedBeers: newBeers });
  };

  render() {
    return (
      <div className="beerList">
        <h1>Favorite Beers</h1>
        {this.state.likedBeers.map((beer, index) => (
          <Beer className="beers"
            id={beer.id}
            like={this.likeBeer}
            name={beer.name}
            image={beer.image_url}
          />
        ))}

        <h1>All Beers</h1>
        {this.state.beers.map((beer, index) => (
          <Beer
            id={beer.id}
            like={this.likeBeer}
            name={beer.name}
            image={beer.image_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
