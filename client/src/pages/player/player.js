import React, { Component } from 'react';
import './player.css';

import QueueObject from '../../components/queueObject/queueObject';
import MediaController from '../../components/mediaControl/mediaControl';
import AddButton from '../../components/addButton/addButton';
import SearchModal from '../../components/search/search'

class Player extends Component {
    render() {
        return (
            <div className='player'>
                <MediaController />
                <div className='queue'>
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                    <QueueObject />
                </div>
                <SearchModal />

                <AddButton />
            </div>
        )
    }
}

export default Player;
