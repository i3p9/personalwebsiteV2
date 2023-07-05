import React, { useEffect, useState, useRef } from 'react'
import { config } from "@fortawesome/fontawesome-svg-core"
import PlayingAnimation from './playinganimation'

config.autoAddCss = false

const NowPlaying = () => {
    const [track, settrack] = useState("");
    const [artist, setartist] = useState("");
    const [playbackstatus, setplaybackstatus] = useState();

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
        const user = atob("eGZhaGlt");
        const apiKey = atob("NjMyNjk2MTY5OGVjODAzNTNiOGIwZjExMThmNzYyMzg=");
        let callURL = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=" + user + "&api_key=" + apiKey + "&format=json"

        fetch(callURL)
            .then(res => res.json())
            .then(data => {
                settrack(data.recenttracks.track[0].name)
                setartist(data.recenttracks.track[0].artist['#text'])
                if (data.recenttracks.track[0].hasOwnProperty('@attr')) {
                    //console.log("In the playing thingy")
                    setplaybackstatus(true)
                }
                else {
                    setplaybackstatus(false)
                }
            })
            .catch((error) => {
                console.log(`error fetching nowplaying data ${error}`);
            })
    }, [date])

    //console.log(track);
    return (
        // <a href="https://www.last.fm/user/xfahim" class="now-playing-link" target="_blank" rel="noreferrer">
        // <Link href='/nowplaying' class='now-playing-link'>
        //     <div className="now-playing"><FontAwesomeIcon icon={faSpotify} /> <span>{playbackstatus} </span> <span><PlayingAnimation /></span>{track} by {artist}</div>
        // </Link>
        <PlayingAnimation trackName={track} artistName={artist} playBackStatus={playbackstatus} />

    )
}

export default NowPlaying
