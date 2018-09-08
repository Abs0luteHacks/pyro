import React, { Component } from 'react';
import button from 'react';
import './landing.css';
import logo from './logo.png'

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <img src={logo} alt="logo" className='logo'/>
                <div className='tagline'>
                    <h1>Enjoy music together.</h1>
                </div>

                <div className='tabBar'>
                    <button className='button' style={{backgroundColor:'#4D4D4D', fontWeight: '500'}}>
                        JOIN
                    </button>
                    <button className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        HOST
                    </button>
                </div>
            </div>
        )
    }
}

export default Landing;
