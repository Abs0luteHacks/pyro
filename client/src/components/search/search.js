import React, { Component } from 'react';
import SearchBar from './searchBar';
import SearchResult from './searchResult';

import './search.css';

class Search extends Component {
    render() {
        return (
            <div className='search' style={{display: this.props.show ? 'none' : 'flex' }}>
              <SearchBar />
              <div className='results'>
                <SearchResult />
                <SearchResult />
              </div>
            </div>
        )
    }
}

export default Search;
