import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/nowplayingdash.scss'

const NowPlayingPage = () => {
    //MUSIC SECTION STARTS HERE
    //const [show, setShow] = useState(false);
    const [track, settrack] = useState("");
    const [artist, setartist] = useState("");
    const [album, setalbum] = useState("");
    let [albumart, setalbumart] = useState("");
    const [playcount, setplaycount] = useState("");
    //const [isloved, setisloved] = useState("");

    let isPlaying = false;
    const user = "xfahim"
    const apiKey = "6326961698ec80353b8b0f1118f76238"
    let url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=" + user + "&api_key=" + apiKey + "&format=json"

    useEffect(() => {
        let repeat;
        //https://stackoverflow.com/questions/61197545/auto-refresh-json-data-on-an-set-interval-in-react-native-using-react-hooks
        async function fetchData() {
            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log("Checking for new songs")
                settrack(json.recenttracks.track[0].name)
                setartist(json.recenttracks.track[0].artist['#text'])
                setalbum(json.recenttracks.track[0].album['#text'])
                setalbumart(json.recenttracks.track[0].image[3]['#text'])
                console.log(json.recenttracks.track[0].hasOwnProperty('@attr'));
                if (json.recenttracks.track[0].hasOwnProperty('@attr')) {
                    console.log("In the playing thingy")
                    isPlaying = true;
                    let trackurl = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo&user=" + user + "&api_key=" + apiKey + "&artist=" + encodeURI(artist) + "&track=" + encodeURI(track) + "&format=json";
                    //console.log(trackurl);
                    // now that we know a song is playing, let's get more information about it
                    const track_res = await fetch(trackurl);
                    const track_json = await track_res.json();
                    //setplaycount(track_json.)
                    setplaycount(track_json.track.userplaycount);
                    //console.log(track_json.track.userplaycount)
                }

                repeat = setTimeout(fetchData, 15000);
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData();

        return () => {
            if (repeat) {
                clearTimeout(repeat);
            }
        }
    });
    console.log(isPlaying);
    let albumarthighres = albumart.replace("300x300", "600x600");

    //DATE-TIME SECTION
    const [newtime, setnewtime] = useState("");

    useEffect(() => {
        let repeat;
        //https://stackoverflow.com/questions/61197545/auto-refresh-json-data-on-an-set-interval-in-react-native-using-react-hooks
        async function fetchTimeDate() {
            try {
                var today = new Date();
                var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                var date = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                var datetime = date + "  |  " + time;
                setnewtime(datetime);
                repeat = setTimeout(fetchTimeDate, 15000);
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchTimeDate();

        return () => {
            if (repeat) {
                clearTimeout(repeat);
            }
        }
    });


    //////

    //WEATHER STARTS HERE
    const [temp, settemp] = useState("");
    const [desc, setdesc] = useState("");
    const [icon, seticon] = useState("");
    const ow_api = "1f14d953f677312c00b7ef28971b5364"
    const locid = "1185204";
    const units = "metric";
    let getweather = "https://api.openweathermap.org/data/2.5/weather?id=" + locid + "&appid=" + ow_api + "&units=" + units
    console.log(getweather);
    useEffect(() => {
        fetch(getweather)
            .then(res => res.json())
            .then(data => {
                settemp(data.main.feels_like);
                setdesc(data.weather[0].description);
                seticon(data.weather[0].icon);
            })
    }, []);
    let iconLink = "http://openweathermap.org/img/w/" + icon + ".png";
    console.log(temp);
    console.log(desc);

    return (
        <main>
            <body className='body-class-nowplaying' style={{ backgroundImage: `url(${albumarthighres})` }}>
                <div class="bgblur">
                    <div class='flexhead'>
                        <div><span class='datetime glassbg'>{newtime}</span></div>
                        <div><span class="weather glassbg">Feels like {temp}°, {desc}</span></div>
                    </div>
                    <div class='flexmain'>
                        <div><img class="albumart" src={albumarthighres} alt='album art of currently playing song' /></div>
                        <div class="musicinfo">
                            <div class="trackname"><span class='glassbg'>{track}</span></div>
                            <div class="artistname"><span class='glassbg'>{artist}</span></div>
                            <div class="albumname"><span class='glassbg'>{album}</span></div>
                            <div class="numberofplays">{playcount} plays</div>
                        </div>
                    </div>
                </div>
            </body>
        </main>
    )
}

export default NowPlayingPage
