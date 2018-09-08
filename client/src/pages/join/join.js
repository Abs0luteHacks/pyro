import React, { Component } from 'react';
import './join.css';

class Join extends Component {
    render() {
        return (
            <div className='join'>
            <div class="flex-container">
                <div class="row"> 
                    <div class="flex-item">
                        <form>
                            <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                            <label for="nme"><span>Enter the room code</span></label>
                        </form>
                    </div>
                </div>
            </div>
                <div className='tabBar'>
                    <div className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        JOIN ROOM
                    </div>
                </div>
            </div>
        )
    }
}

export default Join;
