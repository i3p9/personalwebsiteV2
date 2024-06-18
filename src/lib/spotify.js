import { Buffer } from 'buffer'

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.GATSBY_SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const SPOTIFY_TOKEN_LOCALSTORAGE = 'spotify_access_token'
const SPOTIFY_TOKEN_EXPIRE_LOCALSTORAGE = 'spotify_access_token_expiration'

const saveTokenToLocalStorage = (access_token, expires_in) => {
    const expires_in_timer = Date.now() + expires_in * 1000
    localStorage.setItem(SPOTIFY_TOKEN_LOCALSTORAGE, access_token)
    localStorage.setItem(SPOTIFY_TOKEN_EXPIRE_LOCALSTORAGE, expires_in_timer)
}

const getTokenFromLocalStorage = () => {
    const access_token = localStorage.getItem(SPOTIFY_TOKEN_LOCALSTORAGE)
    const expires_in = localStorage.getItem(SPOTIFY_TOKEN_EXPIRE_LOCALSTORAGE)

    if (access_token && expires_in) {
        const expired_time = parseInt(expires_in, 10)
        if (expired_time > Date.now()) {
            //('should have accesstoken');
            //console.log('token: ', access_token);
            return access_token
        } else {
            //console.log('token expired :(');
            return null
        }
    }
}

const getAccessToken = async () => {
    const token = getTokenFromLocalStorage()

    if (token) { //checking if localstorage token is valid
        return token
    }

    // if not valid, refresh token
    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'refresh_token');
    requestBody.append('refresh_token', refresh_token);

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody.toString()
    })

    if (response.ok) {
        const data = await response.json()
        const { access_token, expires_in } = data
        saveTokenToLocalStorage(access_token, expires_in)
        return access_token
    } else {
        console.log('error refreshing token, try again')
    }
}


const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export const getTopTracks = async () => {
    const access_token = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`

export const getCurrentlyPlaying = async () => {
    const access_token = await getAccessToken();
    const response = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })

    if (response.status === 200) {
        const data = await response.json()
        const response_data = {
            is_playing: data?.is_playing,
            track_name: data?.item?.name,
            artist_name: data?.item?.artists[0]?.name,
            album_name: data?.item?.album?.name,
            album_art: data?.item?.album?.images[0]?.url
        }
        return response_data
    } else if (response.status === 204) { // if currently-playing returns 204 if not being played for a while
        const response_recently = await fetch(RECENTLY_PLAYED_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
        const data = await response_recently.json()
        const response_data = {
            is_playing: false,
            track_name: data?.items[0]?.track?.name,
            artist_name: data?.items[0]?.track?.artists[0]?.name,
            album_name: data?.items[0]?.track?.album?.name,
            album_art: data?.items[0]?.track?.album?.images[0]?.url
        }
        return response_data
    } else {
        console.log('something went wrong, oops');
    }
}
