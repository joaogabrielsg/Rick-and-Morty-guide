import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar.js'
import Board from './Board.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SearchBar></SearchBar>

        <Board></Board>

      </div>
    );
  }
}

export default App;
