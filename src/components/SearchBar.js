import React, { Component } from 'react';
import '../styles/SearchBar.scss';
import SearchImage from '../assets/search.png'

class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-header">
                    <input className="SearchBar-input" 
                           type="text" placeholder="Search a Character" 
                           value={this.props.name} 
                           onChange={this.props.onChange}/><button>
                        <img src={SearchImage} alt="search"/>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default SearchBar;