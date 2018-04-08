import React, { Component } from 'react';
import '../styles/Card.scss';

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <div className="Card-middle">
                    <img src={this.props.image} alt="Character"/>
                    <h1 className="h1Card">{this.props.name}</h1>
                    <div className="SameLine">
                        <p className="Id">{this.props.id}</p>
                        <p className="Info">{this.props.status} / {this.props.species}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;