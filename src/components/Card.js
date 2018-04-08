import React, { Component } from 'react';
import '../styles/Card.scss';

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <div className="Card-middle">
                    <img src={this.props.image} alt="Character"/>
                    <h1>{this.props.name}</h1>
                    <div className="sameLine">
                        <p className="id">{this.props.id}</p>
                        <p className="info">{this.props.status} / {this.props.species}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;