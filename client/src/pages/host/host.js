import React, { Component } from 'react';
import './host.css';

class Host extends Component {
    render() {
        return (
            <div className='host'>
            <div class="flex-container">
                <div class="row"> 
                    <div class="flex-item">
                        <form>
                            <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                            <label for="nme"><span>Enter the room code</span></label>
                            <textarea name="message" rows="2" class="question" id="msg" required autocomplete="off"></textarea>
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

export default Host;
