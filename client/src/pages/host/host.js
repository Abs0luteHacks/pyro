import React, { Component } from 'react';
import './host.css';



class Host extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className='container'>
            <div className="flex-container">
                <div className="row"> 
                    <div className="flex-item">
                    <div className='subHeading'>
                            <h1>create a room name</h1>
                    </div>
                    <input placeholder="name"></input>
                    </div>
                    <div className="flex-item">
                        <div className='subHeading'>
                            <h1>genre</h1>
                            <select>
                            <option value="pop">pop</option>
                            <option value="hiphop">hiphop</option>
                            <option value="rock">rock</option>
                            <option value="country">country</option>
                            <option value="edm/dance">EDM/Dance</option>
                            <option value="any">any</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-item">
                    <div className='subHeading'>
                            <h1>genre</h1>
                            <select>
                            <option value="chill">chill</option>
                            <option value="party">party</option>
                            <option value="workout">workout</option>
                            <option value="focus">focus</option>
                            <option value="any">any</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                <div className='tabBar'>
                    <div className='button' style={{backgroundColor:'#EF4A30', fontWeight: '700'}}>
                        CREATE ROOM
                    </div>
                </div>
            </div>
        )
    }
}

export default Host;
