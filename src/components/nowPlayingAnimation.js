import React from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import '../scss/nowplayinganimationstyle.scss';

const PlayingAnimation = ({ trackName, artistName, playBackStatus }) => {

    if (playBackStatus === true) {
        return (
            <div className="animation-container">
                <div className="playing">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="text-container">
                    <Link href='/nowplaying' class='now-playing-link'>
                        <span className="text"> Now Playing: {trackName} by {artistName}</span>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="animation-container">
                <div>
                    <Link href='/nowplaying' class='now-playing-link'>
                        <span className="text"><FontAwesomeIcon icon={faSpotify} /> Last Played: {trackName} by {artistName}</span>
                    </Link>
                </div>
            </div>

        );
    }
};

export default PlayingAnimation;
