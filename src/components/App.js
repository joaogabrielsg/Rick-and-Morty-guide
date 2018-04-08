import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar.js'
import Board from './Board.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar name={this.state.name} onChange={ this.changeName }></SearchBar>
        <Board name={this.state.name}></Board>
      </div>
    );
  }
}

export default App;
