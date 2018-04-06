import React, { Component } from 'react';
import '../styles/Card.scss';

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
                <p>{this.props.status}</p>
            </div>
            
        );
    }
}

export default Card;