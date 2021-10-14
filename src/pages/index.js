import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@fontsource/inter'
import "@fontsource/montserrat"
import "@fontsource/open-sans"
import "@fontsource/yanone-kaffeesatz"
import '../scss/index.scss'
import Navbar from '../components/navbar'
import NowPlaying from '../components/nowplaying'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faTwitter, faLastfm } from '@fortawesome/free-brands-svg-icons'

// TODO: Contact Info, email?

const IndexPage = () => {
  return (
    <main>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Fahim Faisal</title>
      <link rel="canonical" href="https://fahim.tech"/>
      <meta property="og:site_name" content="Website of Fahim Faisal" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fahim Faisal" />
      <meta property="og:url" content="https://fahim.tech/ogimage.webp" />
      <meta property="og:description" content="Personal website of Fahim Faisal" />
      <meta property="og:image" content="/ogimage.webp" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="https://fahim.tech"/>
      <meta property="twitter:url" content="https://fahim.tech"/>
      <meta name="twitter:title" content="Fahim Faisal"/>
      <meta name="twitter:description" content="Personal website of Fahim Faisal"/>
      <meta name="twitter:image" content="https://fahim.tech/ogimage.webp"/>
      </Helmet>
      <Navbar/>
    <div className="container">
      <div>
        <h1 className="home-name">Hey, I'm Fahim Faisal</h1>
      I'm a software engineer from Dhaka, Bangladesh. I like building things with Python and Javascript, and automating almost anything I can.
My hobbies include space, <a href="https://spotify.com/sphincone" target="_blank" style={{textDecoration: "none", fontStyle: "italic"}} class="hover-underline-animation">making playlists</a> and taking pictures. I also like comedy shows, I'm a big fan of SNL.
Currently I'm prepping for Master's and making cool <Link to="/projects" className="hover-underline-animation" style={{ textDecoration: "none" }}>projects</Link>.
{/* <div className="new-line">Note: This site is still being built. You can visit my old site here: <a href="https://old.fahim.tech">https://old.fahim.tech</a></div> */}
  <NowPlaying/>
      </div>
      <div style={{marginTop: 10 + 'px'}}>
        <br/><a href="https://github.com/i3p9/" class="home-links" target="_blank"><FontAwesomeIcon icon={ faAt } /> fahimpfaisal@gmail.com</a>
        <br/><a href="https://github.com/i3p9/" class="home-links" target="_blank"><FontAwesomeIcon icon={ faGithub } /> github</a>
        <br/><a href="https://twitter.com/fahplusim" class="home-links" target="_blank"><FontAwesomeIcon icon={ faTwitter } /> twitter</a>
        <br/><a href="https://www.last.fm/user/xfahim" class="home-links" target="_blank"><FontAwesomeIcon icon={ faLastfm } /> last.fm</a>
      </div>
    </div>
    </main>
  )
}
export default IndexPage
