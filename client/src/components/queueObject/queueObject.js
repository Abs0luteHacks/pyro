import React, { Component } from 'react';
import './queueObject.css';

import album from '../mediaControl/album.jpg'
import flame from './heat.png'

class QueueObject extends Component {
    render() {
        return (
            <div className='song'>
                
                <img src={album} className='album'/>
                
                <div className='info'>
                    <div className='metadata'>
                        <h1>God's Plan</h1>
                        <h2>Drake</h2>
                    </div>

                    <div className='heat'>
                        <img src={flame}/>
                        <h1>505</h1>
                    </div>
                
                </div>
                
                
            </div>
        )
    }
}

export default QueueObject;
