import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBox from "./SearchBox";
import Artists from "./Artists";
import singers  from "./singers.json";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {artists: [], word: ""}
  }

  componentDidMount() {
    this.setState({artists: singers.artists});
  }

  getInput = (e) => {
    this.setState({word: e.target.value});
  }

  render() {
    const filteredArtists = this.state.artists.filter(artist => {
      return artist.toLowerCase().includes(this.state.word.toLowerCase());
    });

    return (
      <div className="App">
        <SearchBox getInput={this.getInput}/>
        <Artists singers={filteredArtists}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
