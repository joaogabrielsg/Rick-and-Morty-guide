import React, { Component } from 'react';
import '../styles/Board.scss';
import Card from './Card.js'
import request from '../helpers/api.js'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            characters: []
        };
    }

    componentDidMount() {
        this.requestCharacters();
    }

    requestCharacters() {
        request('https://rickandmortyapi.com/api/character/', (error, result) => {
            this.setState({ characters: result });
            this.setState({ isLoading: false });
            return result;
        })
    }

    renderCard(props) {
        const characters = props.characters;
        const listCards = characters.map((character) => {
            <Card id={character.id} name={character.name}></Card>
        });
        return (
            <ul>
                {listCards}
            </ul>
        );
    }

    render() {

        const { isLoading, characters } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="Board">{characters.map(character =>
                <div key={character.id}>
                    <Card name={character.name}
                        id={character.id}
                        status={character.status}
                        image={character.image}
                        species={character.species}
                    ></Card>
                </div>
            )}
            </div>
        );
    }
}

export default Board;
