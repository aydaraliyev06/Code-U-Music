import React from 'react';
import './MusicList.css';
// import audio1 from './music/Kojo - MOB TIES.mp3'

const MusicList = () => {


    return (
        <div className='musiclist'>
            <div className='musiclist-box'>
                <div className='musiclist-m'>
                    <audio className='audio-1' id='player' src='https://open.spotify.com/track/7o86X7z3gJJXOitt2rcjNy?si=94689c5382c045b9' type='audio/mpeg' controls></audio>
                </div>
            </div>
        </div> 
    );
};

export default MusicList;