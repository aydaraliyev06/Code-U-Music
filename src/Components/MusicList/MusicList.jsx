import React from 'react';
import './MusicList.css';
import audio1 from './music/Kojo - MOB TIES.mp3'

const MusicList = () => {


    return (
        <div className='musiclist'>
            <div className='musiclist-box'>
                <div className='musiclist-m'>
                    <audio className='audio-1' id='player' src={audio1} type='audio/mpeg' controls></audio>
                </div>
            </div>
        </div> 
    );
};

export default MusicList;