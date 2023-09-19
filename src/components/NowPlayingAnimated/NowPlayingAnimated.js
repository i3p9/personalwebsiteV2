import React from 'react';
import '../NowPlayingAnimated/NowPlayingAnimated.css'

const NowPlayingAnimated = ({ playbackStatus, color }) => {
    const animationBarStatus = playbackStatus ? 'animation-bar' : 'animation-bar-not-playing'
    const customStyle = {
        backgroundColor: color ? color : ''
    }
    return (
        <div className="playing">
            <span style={customStyle} className={animationBarStatus}></span>
            <span style={customStyle} className={animationBarStatus}></span>
            <span style={customStyle} className={animationBarStatus}></span>
        </div>
    );
};

export default NowPlayingAnimated;
