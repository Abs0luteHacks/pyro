import React, { Component } from 'react';
import './queueObject.css';

import album from '../mediaControl/album.jpg'
import yellowFlame from './heat1.png'
import orangeFlame from './heat2.png'
import redFlame from './heat3.png'



class QueueObject extends Component {
    render() {
        return (
            <div className='song'>
                
                <img src={album} className='album'/>
                
                <div className='metadata'>
                    <h1>God's Plan</h1>
                    <h2>Drake</h2>
                </div>

                <div className='heat'>
                    <img src={yellowFlame}/>
                    <h1>505</h1>
                </div>
             
            </div>
        )
    }
}

export default QueueObject;
