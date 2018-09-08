import React, { Component } from 'react';
import button from 'react';
import './addButton.css';

class AddButton extends Component {
    render() {
        return (
            <button className='circle'>
                <h1>+</h1>
            </button>
        )
    }
}

export default AddButton;
