import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar.js'
import Card from './Card.js'
import request from '../helpers/api.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      characters: []
    };
  }

  componentDidMount(){
    this.requestCharacters();
  }

  requestCharacters() {
    request('https://rickandmortyapi.com/api/character/', (error, result) => {
      this.setState({characters: result});
      this.setState({isLoading: false});
      return result;
    })
  }

  renderCard(props) {
    const characters = props.characters;
    const listCards = characters.map((character) => {
      <Card id={character.id} name={character.name}></Card>
    });
    return(
      <ul>
        {listCards}
      </ul>
    );
  }

  render() {

    const {isLoading, characters} = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <SearchBar></SearchBar>

        <div>{characters.map(value => 
            <div key={value.id}>
              <Card name={value.name}></Card>
            </div>
          )}
        </div>

        <div className="App">
        </div>
      </div>
    );
  }
}

export default App;
