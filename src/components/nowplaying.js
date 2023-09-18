import React, { useEffect, useState } from 'react'
import { config } from "@fortawesome/fontawesome-svg-core"
import PlayingAnimation from './playinganimation'
import { getCurrentlyPlaying } from '../lib/spotify'

config.autoAddCss = false

const NowPlaying = () => {
    const [nowPlayingData, setNowPlayingData] = useState(null);

    const fetchNowPlayingData = async () => {
        try {
            const response = await getCurrentlyPlaying();
            setNowPlayingData(response)
        } catch (error) {
            console.error('Error fetching top tracks:', error);
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
    }, [date])

    return (
        <PlayingAnimation nowPlayingData={nowPlayingData} />

    )
}

export default NowPlaying
