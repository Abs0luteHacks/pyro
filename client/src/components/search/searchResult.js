import React, { Component } from 'react';
import album from '../mediaControl/album.jpg';
import './searchResult.css';

class SearchResult extends Component {
    render() {
        return (
            <div className='result'>
              <img src={album} />
              <div className='metadata'>
                <h1>God's Plan</h1>
                <h2>Drake</h2>
              </div>
              <h3>2:03</h3>
            </div>
        )
    }
}

export default SearchResult;