import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/nowplayingdash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet"
import { getCurrentlyPlaying } from '../lib/spotify'
import NowPlayingAnimated from '../components/NowPlayingAnimated/NowPlayingAnimated'

const NowPlayingPage = () => {
    function PlayBackStatusContainer({ status }) {
        return (
            <>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <NowPlayingAnimated playbackStatus={true} color={'white'} />
                    <span className="dash-playback-status-text"> {status ? ' Now Playing' : ' Last Played'}</span>
                </div>
            </>
        )
    }

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

    //music: spotify
    const [nowPlayingData, setNowPlayingData] = useState({
        is_playing: false,
        track_name: "Placeholder",
        artist_name: "Placeholder",
        album_name: "place",
        album_art: "https://lastfm.freetls.fastly.net/i/u/600x600/8a89bf00eff0d1912f33164d3a15071f.png"
    })
    const fetchNowPlayingData = async () => {
        try {
            const response = await getCurrentlyPlaying();
            setNowPlayingData(response)
        } catch (error) {
            console.error('Error fetching now playing data:', error);
        }
    }



    //MUSIC
    // const [track, setTrack] = useState("Loading...");
    // const [artist, setArtist] = useState("Loading...");
    // const [album, setAlbum] = useState("Loading...");
    // const [albumart, setAlbumart] = useState("https://lastfm.freetls.fastly.net/i/u/600x600/8a89bf00eff0d1912f33164d3a15071f.png");
    const [playcount, setPlaycount] = useState(0);
    const [isloved, setIsloved] = useState(false);
    // const [playbackstatus, setPlaybackstatus] = useState(false);

    // get tracks
    useEffect(() => {
        fetchNowPlayingData()
        // console.log('nowplayingdata: ', nowPlayingData);
        // //console.log(`getting songs`);
        // const user = atob("eGZhaGlt");
        // const apiKey = atob("NjMyNjk2MTY5OGVjODAzNTNiOGIwZjExMThmNzYyMzg=");
        // const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=${user}&api_key=${apiKey}&format=json`
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         setArtist(data.recenttracks.track[0].artist['#text'])
        //         setAlbum(data.recenttracks.track[0].album['#text'])
        //         setAlbumart(data.recenttracks.track[0].image[3]['#text'].replace("300x300", "600x600"))
        //         setTrack(data.recenttracks.track[0].name)
        //         if (data.recenttracks.track[0].hasOwnProperty('@attr')) {
        //             setPlaybackstatus(true);
        //         } else {
        //             setPlaybackstatus(false);
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(`error fetching nowplaying data ${error}`);
        //     })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    //get track info (playbackcount, loved)
    useEffect(() => {
        //console.log('track changed');
        const user = atob("eGZhaGlt");
        const apiKey = atob("NjMyNjk2MTY5OGVjODAzNTNiOGIwZjExMThmNzYyMzg=");
        const trackurl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&user=${user}&api_key=${apiKey}&artist=${encodeURI(nowPlayingData?.artist_name)}&track=${encodeURI(nowPlayingData?.track_name)}&format=json`
        //console.log(trackurl);
        fetch(trackurl)
            .then(response => response.json())
            .then(data => {
                setPlaycount(data?.track?.userplaycount ? data?.track?.userplaycount : 23)
                setIsloved(data?.track?.userloved === "1" ? true : false)
            })
            .catch((error) => {
                console.log(`error fetching nowplaying data ${error}`);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nowPlayingData])

    //Song title semi-dynamic fontsize
    const [titleFontSize, setTitleFontSize] = useState('2.6rem')
    useEffect(() => {
        if (nowPlayingData?.track_name.length > 35) {
            setTitleFontSize('1.9rem')
            //console.log(`track length big big ${track.length} `)
        }
        //console.log(`${track.length}`)

    }, [nowPlayingData])

    //get weather
    const [temp, setTemp] = useState("0");
    const [desc, setDesc] = useState("getting weather");
    //const [icon, setIcon] = useState("");
    useEffect(() => {
        //console.log('getting weather');
        const ow_api = atob("MWYxNGQ5NTNmNjc3MzEyYzAwYjdlZjI4OTcxYjUzNjQ=");
        const locid = atob("MTE4NTIwNA==");
        const units = "metric";
        const getweather = `https://api.openweathermap.org/data/2.5/weather?id=${locid}&appid=${ow_api}&units=${units}`

        fetch(getweather)
            .then(res => res.json())
            .then(data => {
                setTemp(Math.ceil(data.main.feels_like));
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
            <body className='body-class-nowplaying' style={{ backgroundImage: `url(${nowPlayingData?.album_art})` }}>
                <div className="bgblur">
                    <div className='flexhead'>
                        <div><span className='datetime glassbg readOnlyText'>{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " | " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span></div>
                        <div><span className="weather glassbg readOnlyText">Feels like {temp}°, {desc}</span></div>
                    </div>
                    <div className='flexmain'>
                        <div className='albumart-container'>
                            {nowPlayingData?.album_art ? (
                                <img className="albumart readOnlyText" src={nowPlayingData?.album_art} alt='album art of currently playing song' />
                            ) : (
                                //maybe put a skeleton here!
                                <img className="albumart readOnlyText" src={nowPlayingData?.album_art} alt='album art of currently playing song' />
                            )}
                        </div>
                        <div className="musicinfo">
                            <div className="playbackStatus readOnlyText">
                                <PlayBackStatusContainer status={nowPlayingData?.is_playing} />
                            </div>
                            <div className="trackname readOnlyText" style={{ fontSize: titleFontSize }}><span className='glassbg'>{nowPlayingData?.track_name}</span></div>
                            <div className="artistname readOnlyText"><span className='glassbg'>{nowPlayingData?.artist_name}</span></div>
                            <div className="albumname readOnlyText"><span className='glassbg'>{nowPlayingData?.album_name}</span></div>
                            <div className="numberofplays readOnlyText">{playcount} plays</div>
                            <div className="heartIcon readOnlyText">{isloved ? (
                                <FontAwesomeIcon icon={faHeart} size={'md'} />
                            ) : ""}</div>
                        </div>
                    </div>
                    <div className="backButtonContainerInMusic">
                        <a href='https://ffaisal.com' className="goBackHomeItemInMusic questionSignOnHover">go back?</a>
                    </div>
                </div>
            </body>
        </main>
    )
}

export default NowPlayingPage
