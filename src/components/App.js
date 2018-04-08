import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar.js'
import Board from './Board.js'
import { Route, Switch } from "react-router-dom";

import Home from './Home.js'
import Description from './CardDescription.js'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/description/:id" component={Description}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
