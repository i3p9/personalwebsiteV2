import React, { useEffect, useState } from 'react'
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import '../scss/NowPlayingHome.scss';
import { getCurrentlyPlaying } from '../lib/spotify'
import NowPlayingAnimated from './NowPlayingAnimated/NowPlayingAnimated'

config.autoAddCss = false

const NowPlayingHome = () => {
    const [nowPlayingData, setNowPlayingData] = useState(null)
    const [detailedNowPlayingVisibility, setDetailedNowPlayingVisibility] = useState(false)

    const fetchNowPlayingData = async () => {
        try {
            const response = await getCurrentlyPlaying();
            setNowPlayingData(response)
        } catch (error) {
            console.error('Error fetching nowplaying tracks:', error);
        }
    }

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 5000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    useEffect(() => {
        fetchNowPlayingData()
        //console.log(nowPlayingData);
    }, [date])

    const playBackInfoText = nowPlayingData ? `${nowPlayingData?.track_name} by ${nowPlayingData?.artist_name}` : "Can't Connect to Spotify"

    const DetailedNowPlaying = () => {
        return (
            <>
                <div onClick={(event) => setDetailedNowPlayingVisibility(!detailedNowPlayingVisibility)}>
                    <span className="nowplaying-home-text">
                        <FontAwesomeIcon icon={faSpotify} style={{ marginRight: '5px' }} />
                        {nowPlayingData?.is_playing ? 'Now Playing ' : 'Last Played'}
                    </span>
                    <div className="adjacent-container">
                        <img
                            className="small-album-art"
                            src={nowPlayingData?.album_art}
                            alt="Album Art"
                        />
                        <div>
                            <div className='adjacent-container'>
                                <NowPlayingAnimated playbackStatus={nowPlayingData?.is_playing} />
                                <div style={{ fontWeight: 500, marginLeft: '5px' }} className="nowplaying-home-text">{nowPlayingData?.track_name}</div>
                            </div>
                            <div className="nowplaying-home-text text-faded">{nowPlayingData?.artist_name}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const MinimalNowPlaying = () => {
        return (
            <>
                <div style={{ marginTop: '5px' }} className="adjacent-container" onClick={(event) => setDetailedNowPlayingVisibility(!detailedNowPlayingVisibility)}>
                    {nowPlayingData?.is_playing ?
                        <NowPlayingAnimated playbackStatus={nowPlayingData?.is_playing} />
                        : <FontAwesomeIcon icon={faSpotify} />}
                    <span style={{ fontSize: '1rem', fontWeight: 400, marginLeft: '10px' }}>
                        {nowPlayingData?.is_playing ? 'Now Playing: ' : 'Last Played: '} {playBackInfoText}
                    </span>
                </div>
            </>
        )
    }

    if (detailedNowPlayingVisibility) {
        return <DetailedNowPlaying />
    } else {
        return <MinimalNowPlaying />
    }

}

export default NowPlayingHome
