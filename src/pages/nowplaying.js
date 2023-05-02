import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/nowplayingdash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faCompactDisc, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet"
import { CSSTransition } from 'react-transition-group';


const NowPlayingPage = () => {
    // current date/time + acts as timer as well
    //https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f
    //https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f
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


    //MUSIC
    const [track, setTrack] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [albumart, setAlbumart] = useState("");
    const [playcount, setPlaycount] = useState(0);
    const [isloved, setIsloved] = useState(false);
    const [playbackstatus, setPlaybackstatus] = useState(false);

    // get tracks
    useEffect(() => {
        console.log(`getting songs`);
        const user = atob("eGZhaGlt");
        const apiKey = atob("NjMyNjk2MTY5OGVjODAzNTNiOGIwZjExMThmNzYyMzg=");
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=${user}&api_key=${apiKey}&format=json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArtist(data.recenttracks.track[0].artist['#text'])
                setAlbum(data.recenttracks.track[0].album['#text'])
                setAlbumart(data.recenttracks.track[0].image[3]['#text'].replace("300x300", "600x600"))
                setTrack(data.recenttracks.track[0].name)
                if (data.recenttracks.track[0].hasOwnProperty('@attr')) {
                    setPlaybackstatus(true);
                } else {
                    setPlaybackstatus(false);
                }
            })
    }, [date]);

    //get track info (playbackcount, loved)
    useEffect(() => {
        console.log('track changed');
        const user = atob("eGZhaGlt");
        const apiKey = atob("NjMyNjk2MTY5OGVjODAzNTNiOGIwZjExMThmNzYyMzg=");
        const trackurl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&user=${user}&api_key=${apiKey}&artist=${encodeURI(artist)}&track=${encodeURI(track)}&format=json`
        console.log(trackurl);
        fetch(trackurl)
            .then(response => response.json())
            .then(data => {
                setPlaycount(data?.track?.userplaycount)
                setIsloved(data?.track?.userloved === "1" ? true : false)
            })
            .catch((error) => {
                console.log(`error fetching nowplaying data ${error}`);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [track])

    //get weather
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");
    //const [icon, setIcon] = useState("");
    useEffect(() => {
        console.log('getting weather');
        const ow_api = atob("MWYxNGQ5NTNmNjc3MzEyYzAwYjdlZjI4OTcxYjUzNjQ=");
        const locid = atob("MTE4NTIwNA==");
        const units = "metric";
        const getweather = "https://api.openweathermap.org/data/2.5/weather?id=" + locid + "&appid=" + ow_api + "&units=" + units
        fetch(getweather)
            .then(res => res.json())
            .then(data => {
                setTemp(data.main.feels_like);
                setDesc(data.weather[0].description);
                //setIcon(data.weather[0].icon);
            })
    }, []);
    //let iconLink = "http://openweathermap.org/img/w/" + icon + ".png";

    return (
        <main>
            <Helmet>
                <title>Now Playing</title>
            </Helmet>
            <body className='body-class-nowplaying' style={{ backgroundImage: `url(${albumart})` }}>
                <div class="bgblur">
                    <div class='flexhead'>
                        <div><span class='datetime glassbg'>{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " | " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span></div>
                        <div><span class="weather glassbg">Feels like {temp}°, {desc}</span></div>
                    </div>
                    <div class='flexmain'>
                        <div>
                            <CSSTransition
                                in={Boolean(albumart)}
                                timeout={500}
                                classNames="fade"
                                unmountOnExit
                            >
                                <img class="albumart" src={albumart} alt='album art of currently playing song' />
                            </CSSTransition>

                        </div>
                        <div class="musicinfo">
                            <div class="playbackStatus"><span class='glassbg'>{playbackstatus ? (
                                <>
                                    <FontAwesomeIcon icon={faCompactDisc} spin /> Now Playing
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faHistory} /> Last Played
                                </>
                            )}</span></div>
                            <div class="trackname"><span class='glassbg'>{track}</span></div>
                            <div class="artistname"><span class='glassbg'>{artist}</span></div>
                            <div class="albumname"><span class='glassbg'>{album}</span></div>
                            <div class="numberofplays">{playcount} plays</div>
                            <div class="heartIcon">{isloved ? (
                                <FontAwesomeIcon icon={faHeart} size={'md'} />
                            ) : ""}</div>
                        </div>
                    </div>
                </div>
            </body>
        </main>
    )
}

export default NowPlayingPage
