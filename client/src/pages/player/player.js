import React, { Component } from 'react';
import './player.css';

import QueueObject from '../../components/queueObject/queueObject';
import MediaController from '../../components/mediaControl/mediaControl';

class Player extends Component {
    render() {
        return (
            <div className='player'>
                <MediaController />
                <QueueObject />
            </div>
        )
    }
}

export default Player;
