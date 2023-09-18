import React from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import '../scss/nowplayinganimationstyle.scss';

const PlayingAnimation = ({ nowPlayingData }) => {

    const playBackInfoText = nowPlayingData ? `${nowPlayingData?.track_name} by ${nowPlayingData?.artist_name}` : "Can't Connect to Spotify"

    if (nowPlayingData?.is_playing === true) {
        return (
            <div className="animation-container">
                <div className="playing">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="text-container">
                    <Link href='/nowplaying' class='now-playing-link'>
                        <span className="text"> Now Playing: {playBackInfoText}</span>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="animation-container">
                <div>
                    <Link href='/nowplaying' class='now-playing-link'>
                        <span className="text"><FontAwesomeIcon icon={faSpotify} /> Last Played: {playBackInfoText}</span>
                    </Link>
                </div>
            </div>

        );
    }
};

export default PlayingAnimation;
