import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const NowPlaying = () => {
    const [track, settrack] = useState("");
    const [artist, setartist] = useState("");
    let isPlaying = false;
    const user = "xfahim"
    const apiKey = "6326961698ec80353b8b0f1118f76238"
    let callURL = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=" + user + "&api_key=" + apiKey + "&format=json"
    useEffect(() => {
        fetch(callURL)
        .then (res => res.json())
        .then (data => {
            settrack(data.recenttracks.track[0].name)
            setartist(data.recenttracks.track[0].artist['#text'])
            if (data.recenttracks.track[0]['@attr']['nowplaying']) {
                console.log("In the playing thingy")
                isPlaying = true;
                console.log(isPlaying);
            }
        })
    },[])
    console.log(track)
    return(
        <a href="https://www.last.fm/user/xfahim" class="now-playing-link" target="_blank" rel="noreferrer">
        <div className="now-playing"><FontAwesomeIcon icon={ faSpotify } /> <span>{ isPlaying ? 'Last Played: ' : 'Now Playing: '} </span> { track } by { artist }</div>
        </a>
    )
}

export default NowPlaying
