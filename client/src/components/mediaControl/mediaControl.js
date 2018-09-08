import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

import './mediaControl.css';

import album from './album.jpg'

class MediaControl extends Component {
    render() {
        return (
            <div className='playing'>
                <img src={album} alt='album'/>

                <div className='info'>
                    <div className='details'>
                        <h1>Why So Serious</h1>
                        <h2>Drake</h2>
                    </div>
                    <div className='controls'>
                        <FontAwesomeIcon icon={faStepBackward} color="white" style={{width: 35, height: 'auto', padding: 5}}/>
                        <FontAwesomeIcon icon={faPauseCircle} color="white" style={{width: 35, height: 'auto', padding: 5}}/>
                        <FontAwesomeIcon icon={faStepForward} color="white" style={{width: 35, height: 'auto', padding: 5}}/>
                    </div>  
                </div>
                
                
            </div>
        )
    }
}

export default MediaControl;
