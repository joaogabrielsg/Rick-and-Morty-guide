import React, { Component } from 'react';
import '../styles/App.scss';
import request from '../helpers/api.js'

class App extends Component {

  componentDidMount(){
    request('https://rickandmortyapi.com/api/character/', (error, characters) => {
        console.log(characters);
    }) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
