import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/nowplayingdash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faCompactDisc, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet"
import { CSSTransition } from 'react-transition-group'

function getRGB(c) {
    return parseInt(c, 16) || c;
}

function getsRGB(c) {
    return getRGB(c) / 255 <= 0.03928
        ? getRGB(c) / 255 / 12.92
        : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}

function getLuminance(hexColor) {
    return (
        0.2126 * getsRGB(hexColor.substr(1, 2)) +
        0.7152 * getsRGB(hexColor.substr(3, 2)) +
        0.0722 * getsRGB(hexColor.substr(-2))
    );
}

function getContrast(f, b) {
    const L1 = getLuminance(f);
    const L2 = getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function getTextColor(bgColor) {
    const whiteContrast = getContrast(bgColor, "#ffffff");
    const blackContrast = getContrast(bgColor, "#000000");

    return whiteContrast > blackContrast ? "#ffffff" : "#000000";
}

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
    const [track, setTrack] = useState("Loading...");
    const [artist, setArtist] = useState("Loading...");
    const [album, setAlbum] = useState("Loading...");
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
            .catch((error) => {
                console.log(`error fetching nowplaying data ${error}`);
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

    //Song title semi-dynamic fontsize
    const [titleFontSize, setTitleFontSize] = useState('3rem')
    useEffect(() => {
        if (track.length > 35) {
            setTitleFontSize('1.5rem')
            console.log(`track length big big ${track.length} `)
        }
        console.log(`${track.length}`)

    }, [track])

    //get weather
    const [temp, setTemp] = useState("0");
    const [desc, setDesc] = useState("getting weather");
    //const [icon, setIcon] = useState("");
    useEffect(() => {
        console.log(getTextColor("#C6C49F"));
        console.log('getting weather');
        const ow_api = atob("MWYxNGQ5NTNmNjc3MzEyYzAwYjdlZjI4OTcxYjUzNjQ=");
        const locid = atob("MTE4NTIwNA==");
        const units = "metric";
        const getweather = `https://api.openweathermap.org/data/2.5/weather?id=${locid}&appid=${ow_api}&units=${units}`

        fetch(getweather)
            .then(res => res.json())
            .then(data => {
                setTemp(data.main.feels_like);
                setDesc(data.weather[0].description);
                //setIcon(data.weather[0].icon);
            })
            .catch(error => {
                console.error(`API Error: ${error}`)
            })
    }, []);
    //let iconLink = "http://openweathermap.org/img/w/" + icon + ".png";

    return (
        <main>
            <Helmet>
                <title>Now Playing</title>
                {/* https://stackoverflow.com/questions/62508815/how-would-you-style-the-body-of-multiple-pages-in-a-reactjs-app-without-having */}
                <style>
                    {`
                            html,body {
                                overflow: hidden;
                            }
                       `}
                </style>

            </Helmet>
            <body className='body-class-nowplaying' style={{ backgroundImage: `url(${albumart})` }}>
                <div class="bgblur">
                    <div class='flexhead'>
                        <div><span class='datetime glassbg'>{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " | " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span></div>
                        <div><span class="weather glassbg">Feels like {temp}°, {desc}</span></div>
                    </div>
                    <div class='flexmain'>
                        <div className='albumart-container'>
                            {albumart ? (
                                <img class="albumart" src={albumart} alt='album art of currently playing song' />
                            ) : (
                                //maybe put a skeleton here!
                                <img class="albumart" src={albumart} alt='album art of currently playing song' />
                            )}
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
                            <div class="trackname" style={{ fontSize: titleFontSize }}><span class='glassbg'>{track}</span></div>
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
