import React, { Component } from 'react';
import '../styles/SearchBar.scss';

class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-header">
                    <input className="SearchBar-input" type="text" placeholder="Search a Character"/><button>
                        <img src="../assets/search.svg" alt="search"/>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default SearchBar;