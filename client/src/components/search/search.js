import React, { Component } from 'react';
import SearchBar from './searchBar';

class Search extends Component {
    render() {
        return (
            <div className='searchBar'>
              <input type="text" id="spotlight" placeholder="Spotlight-Search" />
            </div>
        )
    }
}

export default Search;
