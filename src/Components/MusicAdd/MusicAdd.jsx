import React from 'react';
import './MusicAdd.css';

const MusicAdd = () => {

    

    return (
        <div className='add'>
            <h1 className="add-title">Add Music</h1>
            <div className='music-add'>
                <div className='inp-box'>
                    <p className="inp-title">Name:</p>
                    <input type="text" placeholder='Name Music' className="inp-add" />
                </div>
                <div className='inp-box'>
                    <p className="inp-title">Music:</p>
                    <input type="text" placeholder='Music' className="inp-add" />
                </div>
                <button className='btn-add'>Add</button>
            </div>
        </div>
    );
};

export default MusicAdd;