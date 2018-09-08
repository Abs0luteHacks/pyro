import React, { Component } from 'react';
import './searchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className='searchBar'>
              <input type="text" id="spotlight" placeholder="search for a song" />
            </div>
        )
    }
}

export default SearchBar;
