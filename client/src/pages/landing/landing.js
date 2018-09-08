import React, { Component } from 'react';
import button from 'react';
import './landing.css';
import logo from './logo.png'

import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <img src={logo} alt="logo" className='logo'/>
                <div className='tagline'>
                    <h1>Enjoy music together.</h1>
                </div>
                <div className='tabBar'>
                    
                    <div className='button' style={{backgroundColor:'#4D4D4D', fontWeight: '500'}}>
                        <Link to="/join" style={{textDecoration: 'none', color: 'white'}}>JOIN</Link>
                    </div>
                    <div className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        <Link to="/host" style={{textDecoration: 'none', color: 'white'}}>HOST</Link>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Landing;
