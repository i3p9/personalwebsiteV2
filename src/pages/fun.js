import * as React from 'react'
// import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faCompactDisc, faBook, faTv, faVideo, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import '../scss/index.scss'

const FunPage = () => {
    return(
        <main>
            <Navbar/>
            <div className="container">
                <div>
                    <h1 className="home-name">Interests</h1>
                </div>
                I'm going to be honest, the name of this page isn't exactly right. It's meant more for my interests and having a dedicated page on this is pretty fun.
                <br/>
                <div class="fun-page-body">
                <br/><FontAwesomeIcon icon={ faLaptopCode }/> <span class="fun-page-title">computer stuff:</span> i am currently working on a personal ai with accessibility in mind, which has both voice and text input. also giving some free time to projects like txt in a bottle which is geniunely being used by many people! very happy about that. also writing some automation bash scripts for myself and people in various forums like macbb or reddit.
                <br/><br/><FontAwesomeIcon icon={ faCompactDisc }/> <span class="fun-page-title">music:</span> chvrches released their latest album 'screen violence' around 2 months ago and i am still not done listening to it from start to finish. so far i have listened to it <a href="https://www.last.fm/user/xfahim/library/music/CHVRCHES/Screen+Violence" target="_blank" rel="noreferrer">60 times(!) (at the time of writing)</a>, and i dont think i am done yet. other noteable music i have discovered this year is rainbow kitter surprise, sara kays, half an orange etc. visit my <a href="https://open.spotify.com/user/sphincone?si=14c1904a7a944551" target="_blank" rel="noreferrer">spotify</a> and look for the playlist 'hang out' and 'puff' for 2021 stuff i liked.
                <br/><br/><FontAwesomeIcon icon={ faBook }/> <span class="fun-page-title">reading:</span> man, this year wasn't really my year for reading. although i did sneak in a couple books and the last book i read was walk it off, priness by david thorne. next book i have next to this computer is burning bridges to light the way by the same author. i am looking at the book with such joy, gonna start reading as soon as i am done updating this.
                <br/><br/><FontAwesomeIcon icon={ faTv }/> <span class="fun-page-title">shows:</span> show of the year for me ted lasso, no competition. sad that brooklyn nine nine ended this year. other shows i enjoyed this year is succession, gadget man, welcome to waikiki. rewatched office, new girl and 30 rock, as always. check out my tv watching profile here: <a href="https://trakt.tv/users/fahims" target="_blank" rel="noreferrer">https://trakt.tv/users/fahims</a>
                <br/><br/><FontAwesomeIcon icon={ faVideo }/> <span class="fun-page-title">movies:</span> FINALLY got to watch a movie in a theater!!! it was free guy and enjoyed it a lot. as for 2021 movies, no movie theater meant almost no new movies i watched. i am a sucker for rewatching movies way more times than i should have. old movies i rewatched a bunch of times: perks of being a wallflower, it's kind of a funny story, take me home tonight and a bunch more. check my letterboxd for more info: <a href="https://letterboxd.com/fahims/" target="_blank" rel="noreferrer">https://letterboxd.com/fahims/</a>
                <br/><br/><FontAwesomeIcon icon={ faPencilAlt }/> <span class="fun-page-title">personal:</span> as for personal stuff, i think learned the most in this year. starting from developing website via react/node/express, to making restful apis via python to learning gui deveopment. i also got a lot of experience in open source contributing. i also started learning a bit more about data and data structures that i didnt get to learn when doing my bachelors. also started doing more work and projects in ai/ml space after doing my thesis on a ml topic.
                </div>
            </div>
        </main>
    )
}

export default FunPage
