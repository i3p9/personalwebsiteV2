import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const NowPlaying = () => {
    const [track, settrack] = useState("");
    const [artist, setartist] = useState("");
    const [playbackstatus, setplaybackstatus] = useState("");
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
                    console.log("In the playing thingy")
                    setplaybackstatus("Now Playing: ")
                }
                else {
                    setplaybackstatus("Last Played: ")
                }
            })
            .catch((error) => {
                console.log(`error fetching nowplaying data ${error}`);
            })
    }, [])
    //console.log(track);
    return (
        // <a href="https://www.last.fm/user/xfahim" class="now-playing-link" target="_blank" rel="noreferrer">
        <Link href='/nowplaying' class='now-playing-link'>
            <div className="now-playing"><FontAwesomeIcon icon={faSpotify} /> <span>{playbackstatus} </span> {track} by {artist}</div>
        </Link>
    )
}

export default NowPlaying
