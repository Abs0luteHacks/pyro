import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className='searchBar'>
              <input type="text" id="spotlight" placeholder="Spotlight-Search" />
            </div>
        )
    }
}

export default SearchBar;
