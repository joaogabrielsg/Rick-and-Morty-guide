import React, { Component } from 'react';
import '../styles/CardDescription.scss';
import request from '../helpers/api.js';

class CardDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            character: [],
            episodes:[]
        };
    }

    componentDidMount() {
        request('https://rickandmortyapi.com/api/character/', (error, result) => {
            const characterFromId = result.filter((value) => {
                return value.id == this.props.match.params.id;
            })
            this.setState({ character: characterFromId, episodes: characterFromId[0].episode, isLoading: false });
        })
    }

    render() {

        const { isLoading, character, episodes } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        console.log(episodes);

        return (
            <div>{character.map(character =>
                <div key={character.id}>
                    <div className="CardDescription">
                        <div className="CardDescription-middle">
                            
                            <div className="SameLine">
                                <img className="imgDescription" src={character.image} alt="Character" />
                                <div className="Description">
                                    <h1 className="h1Description">{character.name}</h1>
                                    <div>
                                        <p className="IdDescription">{character.id}</p>
                                        <p className="InfoDescription">{ character.status } / { character.species }</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="SameLine">
                                <p className="EpisodesTitle">Episodes:</p>
                                <div className="Episode">{episodes.map(episode => 
                                        <p>{ episode }</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        );
    }
}

export default CardDescription;