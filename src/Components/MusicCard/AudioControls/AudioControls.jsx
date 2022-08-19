import React from 'react';
import { ReactComponent as Play } from './icons/play-outline.svg';
import { ReactComponent as Pause } from './icons/pause-outline.svg';
import { ReactComponent as Next } from './icons/play-forward-outline.svg';
import { ReactComponent as Prev } from './icons/play-back-outline.svg';
import './AudioControls.css';

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
  }) => {


    return (
        <div className="audio-controls">
            <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
            >
            <Prev />
            </button>
            {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <Pause />
            </button>
            ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <Play />
            </button>
            )}
            <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
            >
            <Next />
            </button>
        </div>
    );
};

export default AudioControls;