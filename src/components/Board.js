import React, { Component } from 'react';
import '../styles/Board.scss';
import Card from './Card.js'
import request from '../helpers/api.js'
import {  Link } from "react-router-dom";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            characters: [],
            searchCharacters: []
        };
    }

    componentDidMount() {
        request('https://rickandmortyapi.com/api/character/', (error, result) => {
            this.setState({ characters: result, searchCharacters: result, isLoading: false });
        })
    }

    componentWillReceiveProps(props) {
        const search = this.state.characters.filter((character) => {
            return character.name.toUpperCase().indexOf(props.name.toUpperCase()) >= 0 ? true : false;
        })

        this.setState({ searchCharacters: search });
    }

    render() {
        const { isLoading, searchCharacters } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="Board">{searchCharacters.map(character =>
                <div key={character.id}>
                    <Link to={`./description/${character.id}`} className="Link">
                        <Card name={character.name}
                            id={character.id}
                            status={character.status}
                            image={character.image}
                            species={character.species}
                        ></Card>
                    </Link>
                </div>
            )}
            </div>
        );
    }
}

export default Board;
