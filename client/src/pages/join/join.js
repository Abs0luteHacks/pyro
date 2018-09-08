import React, { Component } from 'react';
import button from 'react';
import { Link } from 'react-router-dom';
import './join.css';

class Join extends Component {
    render() {
        return (
            <div className='join'>
            <div className="flex-container">
                <div className="row"> 
                    <div className="flex-item">
                    <div className='subHeading'>
                        <h1>enter the room code</h1>
                    </div>
                    <input placeholder="name"></input>
                    </div>
                </div>
            </div>
                <div className='tabBar'>
                    <div className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        <Link to='/dashboard' style={{textDecoration: 'none', color: 'white'}}>JOIN ROOM</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Join;
